"server only";

import { PinataSDK } from "pinata-web3";

export const pinataConfig = new PinataSDK({
  pinataJwt: `${process.env.PINATA_JWT}`,
  pinataGateway: `${process.env.NEXT_PUBLIC_GATEWAY_URL}`,
});
