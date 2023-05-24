export const homeTemplate = `
<div class="header-home">
    <div class="title-logo-home">
        <h1>Book Reviews</h1>
        <a id="url-logo-home" href="#"><img src="../img/Laboratoria-social-network.png" id="img-logo-home"></a>
    </div>
    <button id="exitBtn"><ion-icon name="exit-outline"></ion-icon></button>  
</div>

<div class="box-btn-post-major" id="open">
    <button class="btn-post-major" id="open-post"> if you recommend us something?</button>
</div>


<div class="backgraund-opacity hidden" id="backgraund-opacity">
    <div class="post-usuary">
        <div class="box-header-post">
            <button  id="btnClosePost"><ion-icon name="close-outline"></ion-icon></button> 
            <h3>create post</h3>
        </div>
        
        <div class="box-post">
            <form id="task-form" class="task-form">
                <label class="label-form-post" for="title">Title:</label>
                <input type="text" placeholder="Title" id="task-title">

                <label class="label-form-post" for="description">Description:</label>
                <textarea id="task-description" placeholder="  Description" rows="4" cols="50"></textarea>
                <p id="parrafo"><p>
                <button id="btn-task-save">Post</<button>
            </form>
        </div>
    <div>
</div>


<div  class="box-flex" id="box-flex">    
</div>

`;
