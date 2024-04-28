import React, { useState } from 'react';
import { Button, Label, Select, Textarea, TextInput } from "flowbite-react";

const UploadBook = () => {
    const bookCategories = [
        "Fiction",
        "Non-Fiction",
        "Young Adults",
        "Children",
        "Drama",
        "Fantasy",
        "History",
        "Horror",
        "Travel",
        "Mystery",
        "Crime",
        "Teen",
    ];
    const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0]);

    const handleChangeSelectionValue = (event) => {
        setSelectedBookCategory(event.target.value);
    };

    const handleBookSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const bookTitle = form.bookTitle.value;
        const authorName = form.authorName.value;
        const imageURL = form.imgURL.value;
        const category = form.categoryName.value;
        const bookDescription = form.bookDescription.value;
        const bookPDFURL = form.bookPDFURL.value;

        const bookObj = {
            bookTitle, authorName, imageURL, category, bookDescription, bookPDFURL
        }

        console.log(bookObj)

        //send data to db
        fetch("http://localhost:3000/upload-book", {
            method: "POST",
            headers: {
                "Content-type": "application/json",

            },
            body: JSON.stringify(bookObj)
        }).then(res => res.json()).then(data => {
            // console.log(data)
            alert("Book uploades succesfully!")
            form.reset();
        })
    }

    return (
        <div className='px-4 my-12'>
            <h2 className='mb-8 text-3xl font-bold'>Upload A Book</h2>

            <form onSubmit={handleBookSubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
                {/* first row */}
                <div className='flex gap-8'>
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="bookTitle" value="Book Title" />
                        </div>
                        <TextInput
                            id="bookTitle"
                            name="bookTitle"
                            type="text"
                            placeholder="Book Name"
                            required
                        />
                    </div>

                    {/* author name */}
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="authorName" value="Author Name" />
                        </div>
                        <TextInput
                            id="authorName"
                            name="authorName"
                            type="text"
                            placeholder="Author Name"
                            required
                        />
                    </div>
                </div>

                {/* book image */}
                <div className='flex gap-8'>
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="imgURL" value="Book Image URL" />
                        </div>
                        <TextInput
                            id="imgURL"
                            name="imgURL"
                            type="text"
                            placeholder="Book Image URL"
                            required
                        />
                    </div>

                    {/* Category */}
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="inputState" value="Book Category" />
                        </div>
                        <Select
                            id='inputstate'
                            name='categoryName'
                            className='w-full rounded'
                            value={selectedBookCategory}
                            onChange={handleChangeSelectionValue}
                        >
                            {bookCategories.map((option) => (
                                <option key={option} value={option}>{option}</option>
                            ))}
                        </Select>
                    </div>
                </div>

                {/* book description */}
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="bookDescription" value="Book Description" />
                    </div>
                    <Textarea
                        id="bookDescription"
                        name="bookDescription"
                        placeholder="Write your book description ..."
                        className='w-full'
                        required
                        rows={6}
                    />
                </div>

                {/* book pdf link */}
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="bookPDFURL" value="Book PDF URL" />
                    </div>
                    <TextInput
                        id="bookPDFURL"
                        name='bookPDFURL'
                        type="text"
                        placeholder="Book PDF URL"
                        required
                    />
                </div>

                <Button type="submit" className='mt-5'>Upload Book</Button>
            </form>
        </div>
    );
};

export default UploadBook;
