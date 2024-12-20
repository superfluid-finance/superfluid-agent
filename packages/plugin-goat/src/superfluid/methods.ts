import type { EVMWalletClient } from "@goat-sdk/core";
import type { z } from "zod";
import { CFA_FORWARDER_ABI, SUPER_TOKEN_FACTORY_ABI, POOL_ABI } from "./abi";
import type {
    flowParametersSchema,
    getFlowrateParametersSchema,
    updateMemberUnitsParametersSchema,
    getUnitsParametersSchema,
    getMemberFlowRateParametersSchema,
    getTotalFlowRateParametersSchema,
    deploySuperTokenWrapperParametersSchema,
} from "./parameters";
import { Abi } from "viem";

export async function flow(
    walletClient: EVMWalletClient,
    parameters: z.infer<typeof flowParametersSchema>
): Promise<string> {
    try {
        const hash = await walletClient.sendTransaction({
            to: "0xcfA132E353cB4E398080B9700609bb008eceB125",
            abi: CFA_FORWARDER_ABI as Abi,
            functionName: "setFlowrate",
            args: [parameters.token, parameters.receiver, parameters.flowrate],
        });

        return hash.hash;
    } catch (error) {
        throw Error(`Failed to transfer: ${error}`);
    }
}

export async function getFlowrate(
    walletClient: EVMWalletClient,
    parameters: z.infer<typeof getFlowrateParametersSchema>
): Promise<string> {
    const result = await walletClient.read({
        address: "0xcfA132E353cB4E398080B9700609bb008eceB125",
        abi: CFA_FORWARDER_ABI as Abi,
        functionName: "getFlowrate",
        args: [parameters.token, parameters.sender, parameters.receiver],
    });
    return result.value.toString();
}

export async function updateMemberUnits(
    walletClient: EVMWalletClient,
    parameters: z.infer<typeof updateMemberUnitsParametersSchema>
): Promise<string> {
    try {
        const hash = await walletClient.sendTransaction({
            to: parameters.poolAddress,
            abi: POOL_ABI as Abi,
            functionName: "updateMemberUnits",
            args: [parameters.memberAddr, BigInt(parameters.newUnits)],
        });

        return hash.hash;
    } catch (error) {
        throw Error(`Failed to update member units: ${error}`);
    }
}

export async function getUnits(
    walletClient: EVMWalletClient,
    parameters: z.infer<typeof getUnitsParametersSchema>
): Promise<string> {
    const result = await walletClient.read({
        address: parameters.poolAddress,
        abi: POOL_ABI as Abi,
        functionName: "getUnits",
        args: [parameters.memberAddr],
    });
    return result.value.toString();
}

export async function getMemberFlowRate(
    walletClient: EVMWalletClient,
    parameters: z.infer<typeof getMemberFlowRateParametersSchema>
): Promise<string> {
    const result = await walletClient.read({
        address: parameters.poolAddress,
        abi: POOL_ABI as Abi,
        functionName: "getMemberFlowRate",
        args: [parameters.memberAddr],
    });
    return result.value.toString();
}

export async function getTotalFlowRate(
    walletClient: EVMWalletClient,
    parameters: z.infer<typeof getTotalFlowRateParametersSchema>
): Promise<string> {
    const result = await walletClient.read({
        address: parameters.poolAddress,
        abi: POOL_ABI as Abi,
        functionName: "getTotalFlowRate",
        args: [],
    });
    return result.value.toString();
}

export async function deploySuperTokenWrapper(
    walletClient: EVMWalletClient,
    parameters: z.infer<typeof deploySuperTokenWrapperParametersSchema>
): Promise<string> {
    const result = await walletClient.sendTransaction({
        to: "0xe20B9a38E0c96F61d1bA6b42a61512D56Fea1Eb3",
        abi: SUPER_TOKEN_FACTORY_ABI as Abi,
        functionName: "createERC20Wrapper",
        args: [
            parameters.underlyingToken,
            parameters.underlyingDecimals,
            parameters.upgradability,
            parameters.name,
            parameters.symbol,
        ],
    });
    return result.hash;
}
