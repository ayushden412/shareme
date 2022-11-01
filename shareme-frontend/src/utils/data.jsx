export function userQuery(userId){
    const query = `*[type=="user" && _id=='${userId}']`
    return query
}