#! /usr/bin/python3
# -*- coding: utf-8 -*-
#
#	crowdsourcing/convert.py
#
#					Jul/25/2017
#
# ------------------------------------------------------------------
import	sys
import	json
import	collections
#
sys.path.append ('/var/www/data_base/common/python_common')
from file_io import file_to_str_proc
#
# ------------------------------------------------------------------
def convert_proc(dict_in):
	dict_out = collections.OrderedDict()
	keys = dict_in.keys()
	list_keys = []
	for key in keys:
		list_keys.append(key)
#
	list_reverse = reversed(list_keys)
	for key in list_reverse:
		dict_out[key] = dict_in[key]
#
	return dict_out
# ------------------------------------------------------------------
sys.stderr.write("*** 開始 ***\n")
#
json_in = "projects.json"

sys.stderr.write(json_in + "\n")
#
json_str = file_to_str_proc (json_in)
dict_in = json.loads (json_str)
#
dict_out = convert_proc(dict_in)
out_str = json.dumps (dict_out)
print ("Content-Type: application/json\n\n")
#
print (out_str)
#
sys.stderr.write ("*** 終了 ***\n")
# ------------------------------------------------------------------
