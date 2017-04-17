dribbleService(function (shots) {
    var main = document.querySelector('main');
    var ul = document.createElement('ul');

    shots.forEach(function (shot) {
        ul.innerHTML += createShot(shot);
    });

    main.appendChild(ul);
});

var createShot = function (shot) {
    return `
        <li>
            <div class="shot">
                <a data-toggle="modal" data-target="#myModal${shot.id}">
                    <div class="thumbnail">
                        <figure>
                            <img src="${shot.images.normal}">
                            <figcaption>
                                <span>${shot.title}</span>
                                <span>${shot.user.name}</span>
                                <span class="indicators">
                                    <i class="fa fa-eye"></i> ${shot.views_count}
                                    <i class="fa fa-comment"></i> ${shot.comments_count}
                                    <i class="fa fa-heart"></i> ${shot.likes_count}
                                </span>
                            </figcaption>
                        </figure>
                    </div>
                </a>
            </div>
            <div class="modal fade" id="myModal${shot.id}" role="dialog">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                            <h4 class="modal-title">${shot.title}</h4>
                        </div>        
                        <div class="modal-body">
                            <span>
                                <a href="${shot.user.html_url}">
                                    <img src="${shot.user.avatar_url}" class="img-circle">
                                    ${shot.user.name}
                                </a>
                            </span>
                            <img src="${shot.images.normal}" class="img-responsive center-block" />
                            <p>${shot.description != null ? shot.description : ''}</p>
                            <p class="text-center"><a href="${shot.html_url}" target="_blank">View in Site</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    `;
}