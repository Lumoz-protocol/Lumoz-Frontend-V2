import { ethers } from 'ethers'
import Erc20Abi from '../abi/erc20.abi.json'
import DepositAbi from '../abi/deposit.abi.json'
import { BASE_TOKEN_CONTRACT_URL } from '@/constants/networks'

export class Erc20Contract {
  contract: ethers.Contract
  jsonRpcProvider: any

  constructor(contractAddress: string, rpcUrl: string, chainId: number, signer?: any) {
    if (chainId) {
      this.jsonRpcProvider = new ethers.providers.StaticJsonRpcProvider(rpcUrl, { name: '', chainId })
    }
    this.contract = new ethers.Contract(
      contractAddress,
      Erc20Abi,
      signer || this.jsonRpcProvider
    )
  }

  async getBalance(account: string, decimals: number) {
    try {
      let balance = 0
      if (
        this.contract.address === BASE_TOKEN_CONTRACT_URL
      ) {
        balance = await this.jsonRpcProvider.getBalance(account)
      } else {
        balance = await this.contract.balanceOf(account)
      }
      balance =
        Math.floor(Number(ethers.utils.formatUnits(balance, decimals)) * 100000000) / 100000000
      return Number(Number(balance).toFixed(8))
    } catch(e) {
      return 0
    }
  }

  async allowance(account: string, spenderContractAddress: string) {
    return ethers.utils.formatUnits(
      await this.contract.allowance(account, spenderContractAddress),
      await this.contract.decimals()
    )
  }

  async approve(spenderContractAddress: string) {
    const max = 100000000
    return await this.contract.approve(
      spenderContractAddress,
      ethers.utils.parseUnits(max.toString(), await this.contract.decimals())
    )
  }
}

export class DepositContract {
  contract: ethers.Contract
  jsonRpcProvider: any
  rpcUrl: string

  constructor(contractAddress: string, rpcUrl: string, chainId?: number, signer?: any) {
    let _provider:any
    if (!signer && chainId) {
      _provider = new ethers.providers.StaticJsonRpcProvider(rpcUrl, { name: '', chainId })
      this.jsonRpcProvider = _provider
    }
    this.rpcUrl = rpcUrl
    this.contract = new ethers.Contract(
      contractAddress,
      DepositAbi,
      signer || _provider
    )
  }

  async hasDeposited(address: string) {
    return await this.contract.hasDeposited(address)
  }

  async deposit(value: number) {
    const _value = await this.contract.depositAmount()
    return await this.contract.deposit(value ? { value: _value } : {})
  }
}