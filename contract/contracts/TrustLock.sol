// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

/// @title TrustLock Contract
/// @author Team 3 - DevCircle
/// @notice Smart Contract: core functions for escrow logic
/// @dev Smart Contract: core functions for escrow logic

contract TrustLock {
    struct CredentialStruct {
        uint256 id;
        string metadataURI;
    }

    event CredentialCreated(address indexed user, string indexed name);

    mapping(address => CredentialStruct) private credentials;

    //? ==================== INTERNAL FUNCTIONS  ==================== ?//

    function _randomIdFn() internal view returns (uint256 randomId) {
        uint256 minId = 1_000_000;
        uint256 range = 9_000_000;
        randomId = minId + (uint256(keccak256(abi.encodePacked(
            block.timestamp,
            msg.sender,
            block.prevrandao
        ))) % range);
    }

    //? ==================== INTERNAL FUNCTIONS  ==================== ?//

    //* =====

    //? ==================== MUTATE FUNCTIONS  ==================== ?//

    function createCredentialFn(string calldata _metadataURI) external {
        require(msg.sender != address(0), "ADDRESS ZERO DETECTED");
        require(bytes(_metadataURI).length > 0, "NAME REQUIRED");

        uint256 uuid = _randomIdFn();

        credentials[msg.sender] = CredentialStruct(uuid, _metadataURI, true);
        emit CredentialCreated(msg.sender, _metadataURI);
    }

    //? ==================== MUTATE FUNCTIONS  ==================== ?//

    //* =====

    //? ==================== QUERY FUNCTIONS  ==================== ?//

    function queryCredentialsFn(address _account) external view returns (CredentialStruct memory) {
        return credentials[_account];
    }

    //? ==================== QUERY FUNCTIONS  ==================== ?//
}
