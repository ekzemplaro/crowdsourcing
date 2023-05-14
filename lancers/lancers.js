// -----------------------------------------------------------------------
//	lancers.js
//
//					May/14/2023
//
// -----------------------------------------------------------------------
'use strict'
// -----------------------------------------------------------------------
window.onload = ()=>
{
	document.querySelector("#outarea_aa").innerText = "*** lancers.js *** start ***"

	const file_json = "./projects.json"
	const place = ".contents"
	read_fetch_table_proc(file_json,place)

	document.querySelector("#outarea_hh").innerText = "*** lancers.js *** end ***"

}

// -----------------------------------------------------------------------
function read_fetch_table_proc(url,place)
{
	fetch(url).then((response) => {
		if(!response.ok) {
			console.log('Read error!')
			throw new Error('error')
		} 
		console.log('Read ok!')
		return response.text()
	}).then((data)  => {
//		console.log(data)

		const data_aa = JSON.parse(data)
		const array_aa = sort_key_proc(data_aa)

		show_table_proc(place,array_aa)
})

}

// -----------------------------------------------------------------------
function sort_key_proc (dict_aa)
{
	var array = new Array()

	for(var it in dict_aa)
		{
		array.push({'key':String (it), 'value':dict_aa[it]})
		}

	array.sort(compare_by_key_proc)

	return array
}

// ---------------------------------------------------------------
function compare_by_key_proc(left,right)
{
	var aa = left.key
	var bb = right.key

	var rvalue = 0

	if (aa > bb)
		{
		rvalue = -1
		}
	else if (aa < bb)
		{
		rvalue = 1
		}

	return	rvalue
}

// -----------------------------------------------------------------------
// [4]:
function show_table_proc(place,array_aa)
{
	var str_out = ""
	str_out += "<table>"
	str_out += "<tr>"
	str_out += "<th>no</th>"
	str_out += "<th>url</th>"
	str_out += "<th>start</th>"
	str_out += "<th>end</th>"
	str_out += "<th>fee</th>"
	str_out += "<th>client</th>"
	str_out += "<th>title</th>"
	str_out += "</tr>"

	array_aa.forEach(function (aax)
		{
		str_out += record_proc(aax.key,aax.value)
		})

	str_out += "</table>"

	document.querySelector(place).innerHTML = str_out
}

// -----------------------------------------------------------------------
function record_proc(key,unit_aa)
{
	var str_out = "<tr>"
	str_out += "<td>" + key + "</td>"
	str_out += '<td><a href="https://www.lancers.jp/work/detail/'
	str_out += unit_aa.url + '">'
	str_out += unit_aa.url + "</a></td>"
	str_out += "<td>" + unit_aa.start + "</td>"
	str_out += "<td>" + unit_aa.end + "</td>"
	str_out += "<td>" + unit_aa.fee + "</td>"
	str_out += "<td>" + unit_aa.client + "</td>"
	str_out += "<td>" + unit_aa.title + "</td>"
	str_out += "</tr>"

	return str_out
}

// -----------------------------------------------------------------------
