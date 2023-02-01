import { NFTItem } from 'components/ui'
import React, { FunctionComponent } from 'react'
import { NftMeta } from '../../../../types/nft'

type NftListProps = {
  nfts: NftMeta[]
}

const NftList: FunctionComponent<NftListProps> = ({nfts}) => {
  return (
    <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
      {nfts.map((nft, index) => {
        return (
        <div key={index} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
          <NFTItem item={nft} />
        </div>
        )
      })}
    </div>
  )
}

export default NftList