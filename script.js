function toggleDescription(event) {
    const button = event.target;
    const descriptionList = button.previousElementSibling;
  
    if (descriptionList.style.display === 'none' || descriptionList.style.display === '') {
      descriptionList.style.display = 'block';
      button.textContent = 'Read Less';
    } else {
      descriptionList.style.display = 'none';
      button.textContent = 'Read More';
    }
  }
  function toggleDescription(event) {
    const button = event.target;
    const projectDescription = button.previousElementSibling;
  
    if (projectDescription.style.display === 'none' || projectDescription.style.display === '') {
      projectDescription.style.display = 'block';
      button.textContent = 'Read Less';
    } else {
      projectDescription.style.display = 'none';
      button.textContent = 'Read More';
    }
  }
  
  