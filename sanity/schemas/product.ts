import { defineField, defineType } from "sanity";

export default defineType({
    name : 'product',
    title : 'Product',
    type : 'document',
    fields : [
        defineField({
            name : 'name',
            type : 'string',
            title : 'Name of Product'
        }),
        defineField({
            name : 'images',
            title : 'Product Images' ,
            type : 'array',
            of : [{type:'image'}]
        }),
        defineField({
            name : 'description',
            type : 'text',
            title : 'Description of Product'
        }),
        defineField({
            name:'category',
            title :'Select Category',
            type : 'reference',
            to:[{
                type:'category'
            }]
        }),
        defineField({
            name : 'slug',
            type : 'slug',
            title : 'Product Slug',
            options : {
                source : 'name',
                slugify: input => input
                         .toLowerCase()
                         .replace(/\s+/g, '-')
                         .slice(0, 200)
            }
        }),
        defineField({
            name : 'price',
            type : 'number',
            title : 'Product Price'
        }),
    ]
})