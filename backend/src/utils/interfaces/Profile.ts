export interface PartialProfile {
    profileId: string,
    profileAvatarUrl: string,
    profileCoins: number,
    profileExp: number,
    profileLevel: number,
    profileUserName: string,
}

export interface Profile {
    profileId: string|null,
    profileActivationToken: string|null,
    profileAvatarUrl: string,
    profileCoins: number,
    profileEmail: string,
    profileExp: number,
    profileHash: string,
    profileLevel: number,
    profileUserName: string,
}

