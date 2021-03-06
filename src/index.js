const mailHtml = '                <section class="mail _bottom-separator-view">\n' +
    '                            <div class="chose mail__elem mail__elem_view">\n' +
    '                                <input class="checkbox" type="checkbox">\n' +
    '                            </div>\n' +
    '                            <a href="#popup-essay" class="simple-link_view">\n' +
    '                                <div class="mail__sender-logo mail__ivanov-logo_view"><p class="ii">И</p></div>\n' +
    '                                <div class="mail__author mail__author_view">\n' +
    '                                    <p class="sender-ivan sender-ivan_view _message_view">Иван Иванов</p>\n' +
    '                                </div>\n' +
    '                                <div class="read-status read-status_view read-status_not-read"></div>\n' +
    '                                <div class="mail__message-body mail__message-body_view">\n' +
    '                                    <p class="ivan-body ivan-body_view _message_view text-overflow_behaviour">Съешь же ещё этих мягких французских булок, да выпей чаю</p>\n' +
    '                                </div>\n' +
    '                                <div class="message-date message-date_view">\n' +
    '                                    <p class="date date_view _message_view">6 июл</p>\n' +
    '                                </div>\n' +
    '                            </a>\n' +
    '                        </section>'


function addNewMail() {
    let newItem = document.createElement("li");
    newItem.innerHTML = mailHtml;
    let list = document.getElementById("mailList");
    let firstElem = document.getElementsByClassName("mail-list__elem")[0];
    if (firstElem != null) {
        let ref = firstElem.querySelector(".simple-link_view");
        ref.setAttribute("href", "index.html");
        firstElem.querySelector(".simple-link_view").replaceWith(ref);
    }
    list.insertBefore(newItem, list.childNodes[0]);
    setTimeout(function() {
        newItem.className = newItem.className + " mail-list__elem mail-list__elem_view";
    }, 10);
}

function deleteTopMail() {
    let childToDelete = document.getElementsByClassName("mail-list__elem")[0];
    if (childToDelete != null) {
        setTimeout(function () {
            childToDelete.className = " will-be-removed";
            childToDelete.addEventListener('transitionend', function () {
                this.remove();
            });
        }, 10);

    }




}
