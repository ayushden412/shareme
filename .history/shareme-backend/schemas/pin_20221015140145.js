export default {
    name: 'pin',
    title: 'Pin',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        }, {

            name: 'destination',
            title: 'Destination',
            type: 'string'

        }, {
            name: 'category',
            title: 'Category',
            type: 'string'
        }, {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true
            }
        }, {
            name: 'userName',
            title: 'UserName',
            type: 'string'
        }, {
            name: 'userName',
            title: 'UserName',
            type: 'string'
        }
    ]
}