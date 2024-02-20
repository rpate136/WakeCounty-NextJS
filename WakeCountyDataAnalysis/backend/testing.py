# import json
# import pandas as pd
# import requests
#
# def getRestaurantsDf():
#     print('Fetching restaurants data...')
#     val = 'https://opendata.arcgis.com/datasets/124c2187da8c41c59bde04fa67eb2872_0.geojson'
#     # Sending get request and saving the response as response object
#     # extracting data in json
#     r = requests.get(url = val)
#     rows = []
#     data = r.json()['features']
#     for d in data:
#         rows.append(d['properties'])
#     df = pd.DataFrame(rows)
#     df['CITY'] = df['CITY'].str.strip()
#     df = df.apply(lambda x: x.astype(str).str.upper())
#     df = df.replace("FUQUAY-VARINA", "FUQUAY VARINA")
#     df['year'] = pd.DatetimeIndex(df['RESTAURANTOPENDATE']).year
#     df['month'] = pd.DatetimeIndex(df['RESTAURANTOPENDATE']).month
#     print('restaurants df shape:', df.shape)
#     return df
#
# def handle_post_request_get_year():
#     df = getRestaurantsDf()
#     # Convert the 'datetime_column' to a Pandas datetime object
#     df['RESTAURANTOPENDATE'] = pd.to_datetime(df['RESTAURANTOPENDATE'])
#     # Extract the year and create a new column 'year'
#     df['RESTAURANTOPENDATE'] = df['RESTAURANTOPENDATE'].dt.year
#     list_of_year = df['RESTAURANTOPENDATE'].unique()
#
#     valueCount = 0
#     options = []
#     for year in list_of_year:
#         temp = {
#             "value": valueCount,
#             "label": year
#         }
#         options.append(temp)
#     return options
#


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


def iterative_in_order_traversal(root):
    prev = None
    stack = []
    res = float("inf")
    node = root

    while stack or node:
        while node:
            stack.append(node)
            node = node.left

        node = stack.pop()

        if prev is not None:
            res = min(res, node.val - prev.val)

        prev = node
        node = node.right  # Corrected this line

    return res

def post_order(root):

    stack = [root]
    node = root

    while(stack):
        if node.left and node.right is None:
            break



# Example usage:
# Construct a binary tree
#        4
#       / \
#      2   6
#     / \
#    1   3
#
# root = TreeNode(4)
# root.left = TreeNode(2)
# root.right = TreeNode(6)
# root.left.left = TreeNode(1)
# root.left.right = TreeNode(3)
#
# # Perform iterative in-order traversal
# result = iterative_in_order_traversal(root)
# print(result)

nums = [1,1,1,2,2,3]
k = 2

ans = []
count = {}

for i in nums:
    if i in count:
        count[i] += 1
    else:
        count[i] = 1
    curr_val_count = count[i]

for i in range(k):
    temp = max(count,key=count.get)
    print("dict: ",count, " max: ", temp)
    ans.append(temp)
    count.pop(temp)


test = set()

test.add((2,1))

print(test)

if (2,1) in test:
    print("yes")
else:
    print("no")