import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const TrustLockModule = buildModule("TrustLockModule", (m) => {
  const trustLock = m.contract("TrustLock");

  return { trustLock };
});

export default TrustLockModule;
