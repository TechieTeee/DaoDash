// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

contract DaoDash {
    struct Contributor {
        uint256 votingPower;
        uint256 totalRewards;
        uint256 lastRewardTimestamp;
    }
    
    mapping(address => Contributor) public contributors;
    uint256 public totalVotingPower;
    uint256 public totalRewards;
    
    uint256 public constant REWARD_AMOUNT = 1 ether;
    uint256 public constant REWARD_INTERVAL = 1 days;
    
    modifier onlyContributor() {
        require(contributors[msg.sender].votingPower > 0, "Only contributors can perform this action");
        _;
    }
    
    function contribute() external {
        require(contributors[msg.sender].votingPower == 0, "You are already a contributor");
        
        contributors[msg.sender].votingPower = 1;
        totalVotingPower += 1;
    }
    
    function completeActionItem() external onlyContributor {
        Contributor storage contributor = contributors[msg.sender];
        require(block.timestamp >= contributor.lastRewardTimestamp + REWARD_INTERVAL, "Reward interval has not passed yet");
        
        uint256 additionalVotingPower = contributor.votingPower + 1;
        contributor.votingPower = additionalVotingPower;
        totalVotingPower += 1;
        
        contributor.totalRewards += REWARD_AMOUNT;
        totalRewards += REWARD_AMOUNT;
        
        contributor.lastRewardTimestamp = block.timestamp;
    }
}
