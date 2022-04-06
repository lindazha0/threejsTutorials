#!/usr/bin/python
from cProfile import label
import json
import numpy as np
import matplotlib.pyplot as plt
import datetime
import time
import os
import ast
import copy
import base64

# input: open json file flow -> python class
openFilePath = "./data/parse6219491628248857926.json"

# output
outDir = "./parseJSONout/"
testOutputName = open("./testOut", "a+")
destName = open("./parseDest.json", "w+")

# data in python
plrActionFeatures = {'hero_die', 'maya_kill', 'gain_exp', 'tower_destory' , 'gain_cash', 'hero_kill', 'boss_kill'}
campActionFeatures = {'hero_die', 'tower_destory','dengta'}

#  draw the tendency of any time-series data
def plotTime():
    y = np.array(times)
    x = np.linspace(0, len(times), len(times))

    plt.plot(x, y)
    plt.xticks(np.linspace(0, len(times), 10))
    plt.yticks(np.linspace(np.max(y), np.max(y), 10))
    plt.show()
# endregion

times = []
X = []
Y = []

X_2 = []
Y_2 = []
left=right=bottom=top=0
if __name__ == "__main__":

    with open(openFilePath, "r", encoding="utf8") as fp:
        itemList = json.load(fp)

        # region: write to itemValList
        for itemVal in itemList:
            # print("time:", itemVal["time"],itemVal['usr_0']['pos'],file=testOutputName)
            for usr_i in range(10):
                usr_dict = itemVal["usr_" + str(usr_i)]
                if usr_i<=4:
                    X.append(usr_dict['pos'][0]) 
                    Y.append(usr_dict['pos'][1]) 
                else:
                    X_2.append(usr_dict['pos'][0]) 
                    Y_2.append(usr_dict['pos'][1]) 

                # update margain
                if usr_dict['pos'][0]<left:
                    left=usr_dict['pos'][0]
                elif usr_dict['pos'][0]>right:
                    right=usr_dict['pos'][0]
                
                if usr_dict['pos'][1]<bottom:
                    bottom=usr_dict['pos'][1]
                elif usr_dict['pos'][1]>top:
                    top=usr_dict['pos'][1]
                # print(itemVal['usr_0']['cashGain'], item.value['usr_0']['cashGain'],file=testOutputName)
#             # print(usr_i, itemVal["usr_0"]["pos"], file=testOutputName)
        plt.scatter(X,Y,label='1')
        plt.scatter(X_2,Y_2,label='2')
        plt.show()
        print("left, right, top, bottom:")
        print(left, right, top, bottom)


# print(json.dumps(itemValList), file=destName)
# # print("type of output in python:", type(itemValList))
# printAllTimes()
