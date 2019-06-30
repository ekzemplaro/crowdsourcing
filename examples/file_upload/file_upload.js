// ------------------------------------------------------------------ 
//	file_upload.js
//
//					Apr/22/2017
// ------------------------------------------------------------------ 
jQuery (function ()
{
	jQuery("#outarea_aa").text ("*** file_upload.js *** 開始 ***")

	gen_area_proc ()

	jQuery("#outarea_hh").text ("*** file_upload.js *** 終了 ***")
})

// ------------------------------------------------------------------ 
// [4]:
function gen_area_proc ()
{
	var str_out = ""
	str_out += '<table>'

	labels = ['dir_aa','dir_bb','dir_cc','dir_dd','dir_ee']

	str_out += '<tr>'
	for (var it in labels)
		{
		const label = labels[it]
		str_out += '<th>' + label + '</th>'
		}
	str_out += '</tr>'

	str_out += '<tr>'
	for (var it in labels)
		{
		const label = labels[it]

		str_out += '<td id="' + label + '" '
		str_out += 'ondragover=\'ondragover_proc (event)\' '
//
//
		str_out += 'ondrop=\'ondrop_proc(event,' + '"' + label + '"' + ')\' >'

		str_out += '</td>'
		}

	str_out += '</tr>'
	str_out += '</table>'

	jQuery("#file_upload_section").html (str_out)
}

// ------------------------------------------------------------------ 
// [4-4]:
// ブラウザ上でファイルを展開する挙動を抑止
function ondragover_proc (event)
{
	event.preventDefault();
	jQuery("#outarea_bb").text ("*** ondragover_proc *** ")
}

// ------------------------------------------------------------------ 
// [4-8]:
// Drop領域にドロップしたファイル情報を読み取り
function ondrop_proc (event,key)
{
	jQuery("#outarea_cc").text ("*** ondrop_proc *** " + key)

    // ブラウザ上でファイルを展開する挙動を抑止
	event.preventDefault()
 
    // ドロップされたファイルのfilesプロパティを参照
	var files = event.dataTransfer.files

	if (files.length == 1)
		{
		var str_out = files[0].name + "&nbsp;:&nbsp;"
		str_out += files[0].size + "<br />"
		str_out += "key = " + key + "<br />"

		jQuery("#outarea_bb").html (str_out)

		file_upload_proc (files[0],key)
		}
}
 
// ------------------------------------------------------------------ 
// [4-8-4]:
// ファイルアップロード
function file_upload_proc (file,folder)
{
jQuery("#outarea_cc").text ("*** FileUpload_proc *** ccc ***")

	var formData = new FormData ()
	formData.append ('file',file)
	formData.append ('folder',folder)

jQuery("#outarea_dd").text ("*** FileUpload *** ddd ***")
jQuery.ajax({
	type: 'POST',
	dataType : "text",
	contentType: false,
	processData: false,
	url: 'upload_ajax.php',
	data: formData,
	success: function (data)
		{
		jQuery("#outarea_ff").text (data)
		}
	})
}

// ------------------------------------------------------------------ 
