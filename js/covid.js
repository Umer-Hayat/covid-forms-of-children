function showDialog(titleval,buttonval)
{
 $('#dialog-message').on('show.bs.modal', function(e) {
            
                var $modal = $(this),
                esseyId = e.relatedTarget.id;
                $modal.find('.edit-content').html(esseyId);
                $modal.find('.modal-title').html(titleval);
                $modal.find('#modbutton').html(buttonval);
                 });
}

