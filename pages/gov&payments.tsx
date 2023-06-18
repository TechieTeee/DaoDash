import React, { ReactElement } from "react";
import { Steps } from "react-daisyui";
import { AppLayout } from "../layouts/AppLayout";
import type { NextPageWithLayout } from "./_app";

const Page: NextPageWithLayout = () => {
    // Mock data for past voting items
    const pastVotingItems = [
        {
            id: 1,
            title: "Open CT Membership",
            description: "Open Collaboration Tier New Membership",
            votesFor: 200,
            votesAgainst: 50,
            status: "Passed",
        },
        {
            id: 2,
            title: "Increase Specialized Marketing",
            description: "Increase marketing budget allocated for special events",
            votesFor: 150,
            votesAgainst: 100,
            status: "Failed",
        },
    ];

    // Mock proposals
    const activeProposals = [
        {
            id: 1,
            title: "Ambassador Program",
            description: "Approve Ambassador program to increase online presence of DAO.",
            votesFor: 100,
            votesAgainst: 20,
            status: "Active",
        },
        {
            id: 2,
            title: "Graphene Capital Contract",
            description: "Review new contract for Graphene Capital and decide on whether to accept terms and conditions of the contract.",
            votesFor: 80,
            votesAgainst: 50,
            status: "Active",
        },
        {
            id: 5,
            title: "Senior DevOps Engineer",
            description: "Approve dao admission for new senior, devops engineer.",
            votesFor: 71,
            votesAgainst: 5,
            status: "Active",
        },
        {
            id: 6,
            title: "Dao Partnership with YC",
            description: "Accept invite into YC web 3 incubator for daos.",
            votesFor: 32,
            votesAgainst: 11,
            status: "Active",
        },
    ];

    // Mock payment history
    const paymentHistory = {
        rewardsEarned: 1000, // Example rewards earned in $USDC
        pendingRewards: 500, // Example pending rewards in $USDC
        unverifiedPending: "$320", // Example unverified funds
        expectedDate: "2023-06-30", // Example expected date to receive rewards
    };

    // Mock progress towards next membership level
    const progress = {
        currentLevel: "Dao Membership Level 2",
        nextLevel: "Dao Membership Level 3",
        completedActions: 10,
        totalActions: 15,
    };

    const progressBarWidth = (progress.completedActions / progress.totalActions) * 100;

    return (
        <div className="w-full text-center grid grid-cols-2 gap-8">
            {/* Active Proposals */}
            <div>
                <h2 className="text-xl font-bold">Active Proposals</h2>
                <table className="table-auto">
                    <thead>
                    <tr>
                        <th className="px-4 py-2">Title</th>
                        <th className="px-4 py-2">Description</th>
                        <th className="px-4 py-2">Votes For</th>
                        <th className="px-4 py-2">Votes Against</th>
                        <th className="px-4 py-2">Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    {activeProposals.map((proposal) => (
                        <tr key={proposal.id}>
                            <td className="border px-4 py-2">{proposal.title}</td>
                            <td className="border px-4 py-2">{proposal.description}</td>
                            <td className="border px-4 py-2">{proposal.votesFor}</td>
                            <td className="border px-4 py-2">{proposal.votesAgainst}</td>
                            <td className="border px-4 py-2">{proposal.status}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            {/* Payment History */}
            <div>
                <h2 className="text-xl font-bold">Payment</h2>
                <div className="card">
                    <div className="card-body">
                        <div className="flex justify-between">
                            <div className="card bg-green-500">
                                <div className="card-body">
                                    <h3 className="text-lg font-bold text-white">Earned & Verified</h3>
                                    <p className="text-white">${paymentHistory.rewardsEarned}</p>
                                </div>
                            </div>
                            <div className="card bg-yellow-500">
                                <div className="card-body">
                                    <h3 className="text-lg font-bold text-white">Verified & Pending</h3>
                                    <p className="text-white">${paymentHistory.pendingRewards}</p>
                                    <p className="text-white">Expected Date: {paymentHistory.expectedDate}</p>
                                </div>
                            </div>
                            <div className="card bg-red-500">
                                <div className="card-body">
                                    <h3 className="text-lg font-bold text-white">Unverified</h3>
                                    <p className="text-white">{paymentHistory.unverifiedPending}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full bg-gray-200 h-2 mt-4">
                        <div className="bg-green-500 h-full" style={{ width: `${progressBarWidth}%` }}></div>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-sm mt-2">{progress.currentLevel}</p>
                        <p className="text-sm mt-2">{progress.nextLevel}</p>
                    </div>
                </div>
            </div>

            {/* Vote Area */}
            <div className="flex flex-col items-center justify-center">
                <h2 className="text-xl font-bold"></h2>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                    Vote
                </button>
            </div>

            {/* Invoice Button */}
            <div>
                <a href="https://create.request.network/" target="_blank" rel="noopener noreferrer">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Generate Invoice
                    </button>
                </a>
            </div>

            {/* Past Voting Items */}
            <div>
                <h2 className="text-xl font-bold mt-8">Past Proposals</h2>
                <table className="table-auto">
                    <thead>
                    <tr>
                        <th className="px-4 py-2">Title</th>
                        <th className="px-4 py-2">Description</th>
                        <th className="px-4 py-2">Votes For</th>
                        <th className="px-4 py-2">Votes Against</th>
                        <th className="px-4 py-2">Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    {pastVotingItems.map((item) => (
                        <tr key={item.id}>
                            <td className="border px-4 py-2">{item.title}</td>
                            <td className="border px-4 py-2">{item.description}</td>
                            <td className="border px-4 py-2">{item.votesFor}</td>
                            <td className="border px-4 py-2">{item.votesAgainst}</td>
                            <td className="border px-4 py-2">{item.status}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

Page.getLayout = function getLayout(page: ReactElement) {
    return (
        <AppLayout title="Governance and Payments" description="Gov + Payments">
            {page}
        </AppLayout>
    );
};

export default Page;
