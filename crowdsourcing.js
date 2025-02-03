// -----------------------------------------------------------------------
//	crowdsourcing.js
//
//					Feb/03/2025
//
// -----------------------------------------------------------------------
jQuery(function()
{
	jQuery('#outarea_aa').text("*** crowdsourcing.js *** start ***")

	let url_in = "./fee_sum_up.py"

	jQuery.getJSON(url_in,function (res)
		{
	jQuery('#outarea_bb').text("*** crowdsourcing.js *** bbb ***")

		let str_out = table_gen_proc(res,2025,2025)
		jQuery('#year_2025').html(str_out)

		str_out = table_gen_proc(res,2024,2024)
		jQuery('#year_2024').html(str_out)

		str_out = table_gen_proc(res,2023,2023)
		jQuery('#year_2023').html(str_out)

		str_out = table_gen_proc(res,2022,2022)
		jQuery('#year_2022').html(str_out)

		str_out = table_gen_proc(res,2021,2021)
		jQuery('#year_2021').html(str_out)

		str_out = table_gen_proc(res,2020,2020)
		jQuery('#year_2020').html(str_out)

		str_out = table_gen_proc(res,2019,2019)
		jQuery('#year_2019').html(str_out)

		str_out = table_gen_proc(res,2018,2018)
		jQuery('#year_2018').html(str_out)

		str_out = table_gen_proc(res,2017,2017)
		jQuery('#year_2017').html(str_out)

		str_out = table_gen_proc(res,2016,2016)
		jQuery('#year_2016').html(str_out)

/*
		const str_out_all = table_gen_proc(res,2010,2200)
		jQuery('#area_all').html(str_out_all)
*/
		})

	jQuery('#outarea_hh').text("*** crowdsourcing.js *** end ***")
})

// -----------------------------------------------------------------------
// [6]:
function table_gen_proc(res,nmin,nmax)
{
	var str_out = ""
	str_out += "<table>"
	str_out += "<tr>"
	str_out += "<th>month</th>"
	str_out += "<th>lancers</th>"
	str_out += "<th>crowdworks</th>"
	str_out += "<th>計</th>"
	str_out += "<t/>"
	var sum_ll = 0
	var sum_cc = 0
	var sum_ss = 0
	
	for (var key in res)
		{
		const year = parseInt(key.substring(0,4))
		if ((nmin <= year) && (year <= nmax))
			{
		const ll = res[key].lancers
		const cc = res[key].crowdworks
		const ss = ll + cc
		str_out += "<tr>"
		str_out += "<td>" + key + "</td>"
		str_out += "<td>" + ll + "</td>"
		str_out += "<td>" + cc + "</td>"
		str_out += "<td>" + ss + "</td>"
		str_out += "</tr>"

		sum_ll += ll
		sum_cc += cc
		sum_ss += ss
			}

		}

	str_out += "<tr>"
	str_out += "<td>合計</td>"
	str_out += "<td>" + sum_ll + "</td>"
	str_out += "<td>" + sum_cc + "</td>"
	str_out += "<td>" + sum_ss + "</td>"
	str_out += "</tr>"

	str_out += "</table>"

	return	str_out
}

// -----------------------------------------------------------------------

