export const _userToDropdown = (users = []) => {
    return users.map((user) => {
        return {
            label: user.name,
            id: user.id,
            group: user.type,
            value: user.id,
            imageUrl: user.imageUrl
        }
    })
}

export const _userToShareMember = (users = []) => {
    return users.map((user) => {
        return {
            text: user.name,
            subText: user.type === "person" ? user.email : `${user.memberCount} members`,
            id: user.id,
            type: user.type,
            permission: user.permission
        }
    })
}

// export const _findBy = (arr, key) {
//     arr.find(())
// }