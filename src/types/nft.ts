import { NftRankType } from "@/components/cards/nft-rank-into";

export type NFTCard = {
    author: string;
    title: string;
    imgSrc: string;
    nftRank: NftRankType;
    tokens
}