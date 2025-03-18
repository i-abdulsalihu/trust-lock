import { pinataConfig } from "@/config/pinata.config";
import { NextResponse, type NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json(); // ← Boom, parsed
    const { role, address, data } = body;

    if (!role || !address || !data) {
      return NextResponse.json({ error: "No Request" }, { status: 400 });
    }

    const credential = { role, address, data };
    const { IpfsHash } = await pinataConfig.upload.json(credential);
    const metadataURI = await pinataConfig.gateways.convert(IpfsHash);

    return NextResponse.json({ metadataURI }, { status: 200 });
  } catch (e) {
    console.error("POST /api/credential error:", e);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
