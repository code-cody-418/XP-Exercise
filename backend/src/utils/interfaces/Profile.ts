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
    profileAvatarUrl: string|null,
    profileCoins: number|null,
    profileEmail: string,
    profileExp: number|null,
    profileHash: string,
    profileLevel: number|null,
    profileUserName: string,
}

