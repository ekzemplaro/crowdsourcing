#! /usr/bin/python3
# -*- coding: utf-8 -*-
#
#	crowdsourcing/fee_sum_up.py
#
#					Feb/21/2019
#
# ------------------------------------------------------------------
import	sys
import	json
#
sys.path.append('/var/www/data_base/common/python_common')
from file_io import file_to_str_proc
#
# ------------------------------------------------------------------
def monthly_calc_proc(data_in):
	data_out = {}
	for key in data_in:
		ddx = data_in[key]["end"].split ('-')
		month = ddx[0] + '-' + ddx[1]
		str_out = key + '\t' + str (data_in[key]["fee"])
		str_out += '\t' + data_in[key]["end"]
		str_out += '\t' + month
#		print (str_out)
#
		if month in data_out:
			data_out[month] += data_in[key]["fee"]
		else:
			data_out[month] = data_in[key]["fee"]
#
	return	data_out
# ------------------------------------------------------------------
def my_key(xx):
	rvalue = 0
	try:
		rvalue = int (xx[:4]) * 12 + int (xx[5:])
	except Exception as ee:
		sys.stderr.write("*** error *** in my_key ***\n")
		sys.stderr.write(str(ee) + "\n")
#	
#
	return	rvalue
# ------------------------------------------------------------------
def fee_to_month_proc(fee):
	data = {}
	months = []
	for key in fee['lancers']:
		months.append (key)
	for key in fee['crowdworks']:
		if not key in months:
			months.append(key)
#
	months.sort(key=my_key)
	months.reverse()
#
	for month in months:
		unit_aa = {}
		unit_aa['lancers'] = 0
		if month in fee['lancers']:
			unit_aa['lancers'] = fee['lancers'][month]
		unit_aa['crowdworks'] = 0
		if month in fee['crowdworks']:
			unit_aa['crowdworks'] = fee['crowdworks'][month]
		data[month] = unit_aa
#
	return	data
# ------------------------------------------------------------------
sys.stderr.write("*** 開始 ***\n")
#
json_lancers = "lancers/projects.json"
json_crowdworks = "crowdworks/projects.json"

sys.stderr.write(json_lancers + "\n")
sys.stderr.write(json_crowdworks + "\n")
#
json_str = file_to_str_proc (json_lancers)
data_lancers = json.loads (json_str)
#
json_str = file_to_str_proc (json_crowdworks)
data_crowdworks = json.loads (json_str)
#
fee = {}
fee["lancers"] = monthly_calc_proc (data_lancers)
fee["crowdworks"] = monthly_calc_proc (data_crowdworks)
#
data = fee_to_month_proc(fee)
#
out_str = json.dumps(data)
print("Content-Type: application/json\n\n")
#
print(out_str)
#
sys.stderr.write("*** 終了 ***\n")
# ------------------------------------------------------------------
