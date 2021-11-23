### Conceptual Model

## Profile
- profileId (PK)


## Events
- eventId (PK)
- eventName
- eventDescription

## Participation (Weak Entity)
- participationProfileId (FK)
- participationEventId (FK)
- participationCoinReward

## Challenge
- challengeId (PK)
- challengeName
- challengeCoinReward

## ChallengeProfile (Weak Entity)
- challengeProfileChallengeId (FK)
- challengeProfileProfileId (FK)

## Trainer
- trainerId (PK)
- trainerName

## Achievements
- achievementId (PK)
- achievementName
- achievementCoinReward

## ProfileAchievements
- profileAchievementsAchievementsId (FK)
- profileAchievementsProfileId (FK)

## ReadingWriting
- readingWritingId
- readingWritingProfileId
- readingWritingQuestion
- readingWritingAnswer
- readingWritingFeedback
- readingWritingCoinFeedback




