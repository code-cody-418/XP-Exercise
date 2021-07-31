export const signupValidator = {
    profileUserName: {
        escape: true,
        trim: true,
        isLength: {
            errorMessage: 'Username must be between seven and thirty two characters',
            options: {min: 7, max: 32}
        }
    },
    profileAvatarUrl: {
        optional: {
            nullable: true
        },
        isURL: {
            errorMessage: "Profile avatar is malformed please upload a new image"
        }
    },
    profileEmail: {
        isEmail: {
            errorMessage: 'Please provide a valid email'
        },
        // Uncomment the next line to sanitize email, but it removes +1 from testing email addresses.
        normalizeEmail: true,
        trim: true
    },
    profilePassword: {
        isLength: {
            errorMessage: 'Password must be at least eight characters',
            options: {min: 8}
        },
        trim: true,
        escape: true
    },
    profilePasswordConfirm: {
        isLength: {
            errorMessage: 'confirm password must be at least eight characters',
            options: {min: 8}
        },
        trim: true,
        escape: true
    },
}
