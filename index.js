$(function() {
        //listen for form submission
        $('#js-shopping-list-form').submit(function (event) {
            
            //get the typed input for the newItem
            const newItem = $('#shopping-list-entry').val();
            
            // clear the input so more items can be added
            $('#shopping-list-entry').val('');

            //add the newItem to shopping list        
            $('.shopping-list').append(
                `<li>
                    <span class="shopping-item">${newItem}</span>
                    <div class="shopping-item-controls">
                        <button class="shopping-item-toggle">
                            <span class="button-label">check</span>
                        </button>
                         <button class="shopping-item-delete">
                            <span class="button-label">delete</span>
                        </button>
                    </div>
                 </li>`);  

            //stop form from default submission
            event.preventDefault();
        });
//delete item from the list when delete button is clicked
        $('.shopping-list').on('click', '.shopping-item-delete', function (event) {
            $(this).closest('li').remove();
        });

 //when the "check" button is clicked the check off style will apply
    $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked')
        });      
    }); 
