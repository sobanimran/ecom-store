import { defineField, defineType } from "sanity";

export default defineType({
    name : 'heroImage',
    title : 'Two Hero Images',
    type : 'document',
    fields : [
        defineField({
            name:'image1',
            title : 'First Image',
            type : 'image',

        }),
        defineField({
            name : 'image2',
            title : 'Second Image',
            type : 'image'
        })
    ]
})