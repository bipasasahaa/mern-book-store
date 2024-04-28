import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { Button, Label, Select, Textarea, TextInput } from 'flowbite-react';

const EditBooks = () => {
  const { id } = useParams();
  const { bookTitle, authorName, imageURL, category, bookDescription, bookPDFURL } = useLoaderData();

  const bookCategories = [
    'Fiction',
    'Non-Fiction',
    'Young Adults',
    'Children',
    'Drama',
    'Fantasy',
    'History',
    'Horror',
    'Travel',
    'Mystery',
    'Crime',
    'Teen',
  ];
  const [selectedBookCategory, setSelectedBookCategory] = useState(category); // Updated to use category from loader data

  const handleChangeSelectionValue = (event) => {
    setSelectedBookCategory(event.target.value);
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const updatedBookObj = {
      bookTitle: form.bookTitle.value,
      authorName: form.authorName.value,
      imageURL: form.imgURL.value,
      category: form.categoryName.value,
      bookDescription: form.bookDescription.value,
      bookPDFURL: form.bookPDFURL.value,
    };

    // console.log(updatedBookObj);
    // Update book data
    fetch(`http://localhost:3000/book/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedBookObj),
    })
      .then((res) => res.json())
      .then((data) => {
        alert('Book is Updated Successfully!');
      });
  };

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Update The Book Data</h2>

      <form onSubmit={handleUpdate} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
        {/* first row */}
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput
              id="bookTitle"
              name="bookTitle"
              type="text"
              defaultValue={bookTitle}
              placeholder="Book Name"
              required
            />
          </div>

          {/* author name */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput
              id="authorName"
              name="authorName"
              type="text"
              defaultValue={authorName}
              placeholder="Author Name"
              required
            />
          </div>
        </div>

        {/* book image */}
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="imgURL" value="Book Image URL" />
            </div>
            <TextInput
              id="imgURL"
              name="imgURL"
              type="text"
              defaultValue={imageURL}
              placeholder="Book Image URL"
              required
            />
          </div>

          {/* Category */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Book Category" />
            </div>
            <Select
              id="inputstate"
              name="categoryName"
              className="w-full rounded"
              value={selectedBookCategory}
              onChange={handleChangeSelectionValue}
            >
              {bookCategories.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
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
            defaultValue={bookDescription}
            placeholder="Write your book description ..."
            className="w-full"
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
            name="bookPDFURL"
            type="text"
            defaultValue={bookPDFURL}
            placeholder="Book PDF URL"
            required
          />
        </div>

        <Button type="submit" className="mt-5">
          Update Book
        </Button>
      </form>
    </div>
  );
};

export default EditBooks;
