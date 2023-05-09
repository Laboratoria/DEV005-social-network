export const homeTemplate = `
<div class="header-home">
    <div class="title-logo-home">
        <h1>Book Reviews</h1>
        <a id="url-logo-home" href="#"><img src="../img/Laboratoria-social-network.png" id="img-logo-home"></a>
    </div>
    <button id="exitBtn"><ion-icon name="exit-outline"></ion-icon></button>  
</div>

<div class="box-btn-post-major" id="open"><button class="btn-post-major" id="open-post"> if you recommend us something?</button></div>


<div class="backgraund-opacity" id="backgraund-opacity">
    <div class="post-usuary">
        <div class="box-header-post">
            <button  id="btnClosePost"><ion-icon name="close-outline"></ion-icon></button> 
            <h3>create post</h3>
        </div>
        
        <div class="box-post">
            <form id="task-form" class="task-form">
                <label class="label-form-post" for="title">Title:</label>
                <input type="text" placeholder="Task Title" id="task-title">

                <label class="label-form-post" for="description">Description:</label>
                <textarea id="task-description" placeholder="Task Description" rows="4" cols="50"></textarea>
                
                <button id="btn-task-save">Post</<button>
            </form>
        </div>
    <div>
</div>


<div  class="box-flex">

    <div id="task-container" class="task-container">
        <div class="box-profile-post">
            <div class="overlay"></div>
            <div class="title-posts">
                <div class="image-profile-usuary"><img src="https://i.pinimg.com/564x/d2/9e/52/d29e52c8cfec7320b1fe09c8421c4156.jpg"></div>
                <span class="name-usuary">Nombre de prueba</span>
            </div>
            <div class="text-select">
                    <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                    <select id="edit" name="edit" class="select-edit">
                        <option value="delete">Delete</option>
                        <option value="edit">Edit</option>
                    </select> 
                
            </div>
        </div>
        <div class="box-result">
            <div class="result-title"></div>
            <div class="result-comment"></div>
        </div>
    </div>
    
</div>

`;
