const book = document.getElementById('book');
const a = Array.from(book.querySelectorAll('a'));

a[0].onclick = () => {
    a.forEach(element => {
        element.classList.remove('font-size_active')        
    });
    book.classList.remove('book_fs-big')
    a[0].classList.add('font-size_active')
    book.classList.add('book_fs-small')
    return false
}

a[1].onclick = () => {
   a.forEach(element => {
       element.classList.remove('font-size_active')   
   });
   a[1].classList.add('font-size_active')
   book.classList.remove('book_fs-small')
   book.classList.remove('book_fs-big')
   return false
}

a[2].onclick = () => {
   a.forEach(element => {
       element.classList.remove('font-size_active')        
   });
   book.classList.remove('book_fs-small')
   a[2].classList.add('font-size_active')
   book.classList.add('book_fs-big')
   return false
}

a[3].onclick = () => {
    a.forEach(element => {
        element.classList.remove('color_active');
    })
    a[3].classList.add('color_active');
    book.classList.remove('book_color-gray')
    book.classList.remove('book_color-whitesmoke')
    book.classList.add('book_color-black')
    return false
}

a[4].onclick = () => {
    a.forEach(element => {
        element.classList.remove('color_active');
    })
    a[4].classList.add('color_active');
    book.classList.remove('book_color-black')
    book.classList.remove('book_color-whitesmoke')
    book.classList.add('book_color-gray')
    return false
}

a[5].onclick = () => {
    a.forEach(element => {
        element.classList.remove('color_active');
    })
    a[5].classList.add('color_active');
    book.classList.remove('book_color-gray')
    book.classList.remove('book_color-black')
    book.classList.add('book_color-whitesmoke')
    return false
}

a[6].onclick = () => {
    a.forEach(element => {
        element.classList.remove('color_active');
    })
    a[6].classList.add('color_active');
    book.classList.remove('book_bg-gray')
    book.classList.remove('book_bg-white')
    book.classList.add('book_bg-black')
    return false
}

a[7].onclick = () => {
    a.forEach(element => {
        element.classList.remove('color_active');
    })
    a[7].classList.add('color_active');
    book.classList.remove('book_bg-black')
    book.classList.remove('book_bg-white')
    book.classList.add('book_bg-gray')
    return false
}

a[8].onclick = () => {
    a.forEach(element => {
        element.classList.remove('color_active');
    })
    a[8].classList.add('color_active');
    book.classList.remove('book_bg-gray')
    book.classList.remove('book_bg-black')
    book.classList.add('book_bg-white')
    return false
}
