// -----------------------------------------------------------------------
//	crowdsourcing.js
//
//					May/15/2019
//
// -----------------------------------------------------------------------
jQuery(function()
{
	jQuery('#outarea_aa').text("*** crowdsourcing.js *** start ***")

	var url_in = "./fee_sum_up.py"

	jQuery.getJSON(url_in,function (res)
		{
		const str_out = table_gen_proc(res,0,12)
		jQuery('#area_year').html(str_out)

		const istart = 5
		const str_out_last = table_gen_proc(res,istart,istart + 12)
		jQuery('#last_year').html(str_out_last)

		const nmax = 120
		const str_out_all = table_gen_proc(res,0,nmax)
		jQuery('#area_all').html(str_out_all)
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
	var count = 0
	
	for (var key in res)
		{
		if (nmin <= count)
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

		count += 1
		if (count == nmax)
			{
			break
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

