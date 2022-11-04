export const userQuery = () =>{
    const query = `*[type=="user" && _id=='${userId}']`
    return query;
};