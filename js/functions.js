// NOTE: Don't use this token, replace it with your own client access token.
$.jribbble.setToken('7a8588164b4940b06bb3210c427d6a27572c6c9cc67003df96155c3980e437a2');

$.jribbble.shots('', {
  'per_page': 36,
  'timeframe': '',
  'sort': 'views'
}).then(function(res) {
  var html = [];
  html.push('<div class="row">');
  res.forEach(function(shot) {
	//Inicio Shot
    html.push('<li class="shots--shot">');
	//thumbnail 
	html.push('<div class="col-sm-6 col-md-2">');
	html.push(' <div class="thumbnail">');
    html.push('<a>');
	//html.push('<a href="' + shot.html_url + '" target="_blank">');
    html.push('<img src="' + shot.images.normal + '" data-toggle="modal" data-target="#myModal' + shot.id + '">');
	html.push('</a>');
	//Descrição
	html.push('<div class="caption">');
	html.push('<h5>' + shot.title + '</h5>');
	html.push('<span class="pull-left"><a href="' + shot.user.html_url + '">' + shot.user.name + '</a></span>');
	html.push('<ul class="pull-right">');	
	html.push('<li><i class="fa fa-eye"></i> ' + shot.views_count + '</li>');
	html.push('<li><i class="fa fa-comment"></i> ' + shot.comments_count + '</li>');
	html.push('<li><i class="fa fa-heart"></i> ' + shot.likes_count + '</li>');
	html.push('</ul>');
	html.push('<br />');
    html.push('</div>');	
    html.push('</div>');
	html.push('</div>');
	//Modal
	html.push('<div class="modal fade" id="myModal' + shot.id + '" role="dialog">');
    html.push('<div class="modal-dialog">');
    html.push('<div class="modal-content">');
	//Header
    html.push('<div class="modal-header">');
    html.push('<button type="button" class="close" data-dismiss="modal">&times;</button>');
	html.push('<h4 class="modal-title">' + shot.title + '</h4>');
    html.push('</div>');
	//Body
    html.push('<div class="modal-body">');	
	html.push('<div>');	
	html.push('<h3><img src="' + shot.user.avatar_url + '" class="img-circle" width="10%"><a href="' + shot.user.html_url + '">' + shot.user.name + '</a></h3>');
	html.push('</div>');	
	html.push('<img src="' + shot.images.normal + '" class="img-responsive center-block">');
	if(shot.description != null)
		html.push('<p>' + shot.description + '</p>');
	html.push('<p class="text-center"><a href="' + shot.html_url + '" target="_blank">View in Site</a></p>');
    html.push('</div>');
    html.push('<div class="modal-footer">');
    html.push('<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>');
    html.push('</div>');
    html.push('</div>');
    html.push('</div>');
	html.push('</div>');
	//Fim Li
	html.push('</li>');
  });
  html.push('</div>');

  $('.shots').html(html.join(''));
});