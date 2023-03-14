import React from "react";
import { useSelector } from "react-redux";

function Logo() {
  const { theme } = useSelector((state) => state.theme);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 2000 424"
      version="1.1"
    >
      <path d="" stroke="none" fillRule="evenodd" />
      <path
        d="M 982.763 2.565 C 981.257 3.382, 979.344 5.367, 978.513 6.976 C 977.681 8.584, 977 11.689, 977 13.874 C 977 16.634, 977.750 18.738, 979.457 20.766 C 980.808 22.372, 984.911 25.439, 988.574 27.581 C 992.237 29.723, 997.399 33.844, 1000.044 36.738 C 1002.689 39.633, 1006.038 44.422, 1007.486 47.381 C 1008.934 50.341, 1010.761 55.178, 1011.547 58.131 C 1012.333 61.084, 1012.970 66.875, 1012.962 71 C 1012.953 76.234, 1012.233 80.599, 1010.581 85.448 C 1009.280 89.269, 1008.449 93.006, 1008.735 93.752 C 1009.034 94.531, 1010.345 94.979, 1011.818 94.804 C 1013.855 94.562, 1015.167 93.036, 1018.208 87.373 C 1020.312 83.453, 1022.986 76.482, 1024.149 71.882 C 1025.852 65.149, 1026.162 61.654, 1025.738 53.963 C 1025.379 47.445, 1024.406 42.093, 1022.676 37.120 C 1021.282 33.111, 1018.647 27.308, 1016.821 24.224 C 1014.994 21.140, 1010.575 15.612, 1007 11.940 C 1003.425 8.267, 998.925 4.305, 997 3.135 C 994.925 1.873, 991.872 1.022, 989.500 1.044 C 987.300 1.064, 984.268 1.748, 982.763 2.565 M 1033.763 10.565 C 1032.257 11.382, 1030.344 13.367, 1029.513 14.976 C 1028.681 16.584, 1028 19.519, 1028 21.497 C 1028 23.788, 1029.422 27.709, 1031.917 32.297 C 1034.072 36.259, 1036.547 41.944, 1037.417 44.932 C 1038.288 47.919, 1039 53.337, 1039 56.971 C 1039 60.606, 1038.311 66.262, 1037.470 69.540 C 1036.628 72.818, 1034.754 77.975, 1033.305 81 C 1031.657 84.441, 1028.067 89.016, 1023.717 93.221 C 1019.030 97.751, 1016.958 100.447, 1017.359 101.493 C 1017.687 102.347, 1018.624 103.302, 1019.442 103.616 C 1020.260 103.930, 1023.533 102.713, 1026.715 100.912 C 1029.897 99.111, 1035.895 94.231, 1040.044 90.069 C 1045.008 85.088, 1048.826 80.106, 1051.209 75.500 C 1053.200 71.650, 1055.501 65.800, 1056.322 62.500 C 1057.142 59.200, 1058.091 54.025, 1058.431 51 C 1058.770 47.975, 1058.596 41.992, 1058.043 37.705 C 1057.490 33.417, 1055.917 26.667, 1054.548 22.705 C 1052.814 17.686, 1050.992 14.514, 1048.544 12.250 L 1045.029 9 1040.765 9.040 C 1038.419 9.062, 1035.268 9.748, 1033.763 10.565 M 936.415 20.377 C 934.719 21.140, 932.356 23.003, 931.165 24.517 C 929.739 26.330, 929.001 28.675, 929.004 31.385 C 929.006 33.694, 929.860 36.899, 930.950 38.686 C 932.019 40.439, 933.923 42.424, 935.182 43.098 C 936.441 43.771, 941.729 44.481, 946.932 44.676 C 952.135 44.870, 958.216 45.513, 960.446 46.106 C 962.676 46.698, 967.200 48.605, 970.500 50.342 C 973.800 52.079, 979.200 56.206, 982.500 59.513 C 985.800 62.820, 989.759 67.871, 991.298 70.738 C 992.838 73.604, 994.777 79.223, 995.609 83.224 C 996.440 87.226, 997.495 90.880, 997.954 91.344 C 998.412 91.808, 999.623 92.025, 1000.644 91.825 L 1002.500 91.463 1002.500 80.982 C 1002.500 72.573, 1002.018 69.027, 1000.060 63.050 C 998.719 58.953, 995.435 52.333, 992.764 48.339 C 990.092 44.345, 985.386 38.830, 982.306 36.085 C 979.225 33.339, 973.733 29.541, 970.102 27.645 C 966.471 25.749, 960.559 23.297, 956.964 22.197 C 953.370 21.097, 947.970 19.926, 944.964 19.593 C 941.277 19.185, 938.497 19.440, 936.415 20.377 M 1074.367 42.918 C 1072.643 43.969, 1070.506 45.867, 1069.617 47.137 C 1068.494 48.739, 1068 51.628, 1068 56.586 C 1068 60.514, 1067.551 66.151, 1067.001 69.114 C 1066.452 72.076, 1064.413 77.740, 1062.471 81.700 C 1060.193 86.345, 1056.810 91.030, 1052.936 94.904 C 1049.396 98.444, 1044.381 102.156, 1040.716 103.949 C 1037.297 105.622, 1031.617 107.567, 1028.092 108.272 C 1024.052 109.079, 1021.281 110.211, 1020.592 111.335 C 1019.723 112.753, 1019.908 113.431, 1021.500 114.655 C 1023.096 115.883, 1025.245 116.077, 1032.139 115.616 C 1037.026 115.289, 1044.226 113.948, 1048.717 112.529 C 1053.084 111.150, 1059.540 108.158, 1063.064 105.881 C 1066.587 103.603, 1072.013 99.100, 1075.122 95.874 C 1078.358 92.514, 1082.544 86.604, 1084.918 82.041 C 1087.198 77.659, 1089.949 70.610, 1091.032 66.377 C 1092.114 62.144, 1092.993 56.840, 1092.985 54.590 C 1092.977 52.341, 1092.408 49.389, 1091.721 48.030 C 1091.033 46.672, 1088.948 44.534, 1087.088 43.280 C 1085.227 42.026, 1082.308 41.002, 1080.602 41.004 C 1078.896 41.006, 1076.090 41.867, 1074.367 42.918 M 916.500 55.973 C 912.650 56.997, 907.925 58.540, 906 59.401 C 904.075 60.262, 901.717 61.583, 900.761 62.336 C 899.804 63.089, 898.305 65.419, 897.430 67.514 C 896.452 69.855, 896.071 72.567, 896.443 74.550 C 896.776 76.324, 898.224 78.952, 899.662 80.389 C 901.099 81.826, 903.994 83.517, 906.096 84.147 L 909.916 85.292 920.208 80.125 C 928.240 76.092, 932.257 74.709, 938.500 73.823 L 946.500 72.688 954.435 74.317 C 958.800 75.213, 964.875 77.159, 967.935 78.641 C 971.278 80.260, 976.222 84.088, 980.316 88.228 C 984.434 92.393, 987.798 94.995, 988.816 94.802 C 989.757 94.624, 990.622 93.384, 990.777 91.991 C 990.952 90.421, 989.566 87.234, 987.029 83.373 C 984.816 80.003, 979.959 74.378, 976.236 70.873 C 972.514 67.368, 966.691 63.026, 963.298 61.225 C 959.904 59.424, 953.652 57.062, 949.404 55.975 C 944.353 54.684, 938.534 54.019, 932.590 54.055 C 927.066 54.089, 920.754 54.841, 916.500 55.973 M 933.015 87.473 C 928.354 88.354, 922.014 90.634, 916.213 93.514 C 908.888 97.150, 905.241 99.781, 899.158 105.819 C 894.903 110.044, 890.609 115.231, 889.617 117.347 C 888.397 119.950, 888.019 122.285, 888.447 124.568 C 888.795 126.423, 890.201 129.274, 891.573 130.904 C 892.944 132.533, 895.626 134.381, 897.533 135.011 C 900.136 135.870, 901.864 135.870, 904.467 135.011 C 906.374 134.381, 909.096 132.486, 910.515 130.800 C 911.934 129.113, 914.030 125.901, 915.173 123.662 C 916.315 121.422, 919.808 117.032, 922.934 113.906 C 926.061 110.779, 931.405 106.815, 934.809 105.096 C 938.214 103.377, 944.037 101.258, 947.750 100.387 C 951.974 99.396, 956.932 98.982, 961 99.281 C 964.575 99.545, 970.358 100.765, 973.851 101.993 L 980.203 104.226 981.738 102.690 C 982.583 101.846, 983.010 100.467, 982.687 99.626 C 982.364 98.786, 979.715 96.721, 976.800 95.039 C 973.885 93.357, 968.026 90.872, 963.780 89.516 C 959.535 88.161, 952.560 86.828, 948.280 86.554 C 943.602 86.255, 937.516 86.621, 933.015 87.473 M 1093.210 90.667 C 1090.933 91.789, 1088.659 94.478, 1085.828 99.394 C 1083.578 103.302, 1079.298 108.846, 1076.317 111.713 C 1073.336 114.580, 1068.108 118.296, 1064.698 119.970 C 1061.289 121.645, 1055.125 123.726, 1051 124.595 C 1046.310 125.583, 1041.439 125.951, 1038 125.577 C 1034.975 125.249, 1029.735 124.018, 1026.356 122.843 C 1022.976 121.667, 1019.457 120.994, 1018.536 121.348 C 1017.494 121.748, 1016.981 122.844, 1017.180 124.246 C 1017.418 125.922, 1019.550 127.573, 1025.500 130.689 C 1029.900 132.993, 1036.566 135.636, 1040.314 136.563 C 1045.461 137.835, 1049.865 138.128, 1058.314 137.762 C 1066.942 137.388, 1071.041 136.703, 1076.242 134.766 C 1079.949 133.384, 1085.515 130.735, 1088.610 128.877 C 1091.705 127.020, 1097.391 122.391, 1101.245 118.590 C 1105.197 114.695, 1109.115 109.734, 1110.228 107.219 C 1111.464 104.424, 1111.987 101.683, 1111.627 99.883 C 1111.310 98.302, 1110.273 95.820, 1109.321 94.368 C 1108.370 92.915, 1106.123 91.114, 1104.328 90.364 C 1102.533 89.614, 1100.037 89.010, 1098.782 89.023 C 1097.527 89.035, 1095.019 89.775, 1093.210 90.667 M 957 110.555 C 953.425 111.323, 946.900 113.734, 942.500 115.913 C 938.100 118.091, 931.933 122.170, 928.797 124.975 C 925.660 127.781, 920.916 133.333, 918.254 137.312 C 915.446 141.511, 912.247 148.080, 910.633 152.963 C 909.103 157.591, 907.615 164.331, 907.324 167.939 L 906.797 174.500 909.181 178 C 910.703 180.234, 913.049 182.017, 915.667 182.930 L 919.770 184.359 923.619 182.894 C 925.833 182.051, 928.431 180.001, 929.734 178.067 L 932 174.704 932 167.062 C 932 162.859, 932.689 156.738, 933.532 153.460 C 934.374 150.182, 936.287 145.050, 937.782 142.055 C 939.277 139.061, 943.432 133.633, 947.017 129.993 C 950.823 126.127, 955.843 122.245, 959.088 120.658 C 962.144 119.163, 967.725 117.371, 971.491 116.676 C 975.617 115.914, 978.744 114.768, 979.361 113.790 C 980.089 112.635, 980.006 111.712, 979.070 110.584 C 978.082 109.394, 975.983 109.020, 970.628 109.079 C 966.707 109.123, 960.575 109.787, 957 110.555 M 972.500 124.520 C 969.200 126.496, 963.458 131.117, 959.740 134.789 C 955.254 139.220, 951.668 143.993, 949.077 148.983 C 946.929 153.117, 944.491 159.200, 943.657 162.500 C 942.824 165.800, 941.843 171.011, 941.477 174.081 C 941.111 177.150, 941.348 183.200, 942.004 187.524 C 942.659 191.848, 944.262 198.538, 945.566 202.392 C 946.933 206.432, 949.153 210.614, 950.811 212.273 C 952.742 214.204, 955.099 215.338, 957.986 215.725 C 961.032 216.133, 963.211 215.803, 965.463 214.590 C 967.210 213.649, 969.396 211.599, 970.320 210.035 C 971.244 208.471, 972 205.552, 972 203.549 C 972 201.189, 970.609 197.369, 968.050 192.703 C 965.877 188.741, 963.402 182.818, 962.550 179.540 C 961.697 176.262, 961.007 170.862, 961.015 167.540 C 961.023 164.218, 961.709 158.617, 962.540 155.093 C 963.370 151.569, 965.473 146.017, 967.212 142.754 C 969.153 139.111, 972.847 134.589, 976.784 131.036 C 981.172 127.076, 983.082 124.659, 982.837 123.375 C 982.641 122.344, 981.584 121.371, 980.490 121.214 C 979.395 121.056, 975.800 122.544, 972.500 124.520 M 986.668 130.126 C 985.660 130.712, 983.093 134.795, 980.963 139.200 C 978.833 143.604, 976.333 150.610, 975.408 154.769 C 974.191 160.238, 973.878 164.843, 974.275 171.415 C 974.671 177.982, 975.654 182.771, 977.822 188.695 C 979.471 193.202, 982.548 199.502, 984.660 202.695 C 986.772 205.888, 991.330 211.270, 994.790 214.655 C 998.249 218.040, 1002.699 221.578, 1004.679 222.518 C 1007.116 223.674, 1009.606 224.048, 1012.389 223.675 C 1015.413 223.269, 1017.357 222.187, 1019.749 219.576 C 1022.314 216.778, 1023 215.162, 1023 211.919 C 1023 209.658, 1022.214 206.478, 1021.254 204.853 C 1020.294 203.227, 1016.806 200.380, 1013.504 198.526 C 1010.202 196.672, 1005.635 193.551, 1003.355 191.590 C 1001.076 189.629, 997.607 185.608, 995.646 182.654 C 993.685 179.700, 990.938 173.877, 989.540 169.715 C 987.714 164.275, 987 160.029, 987 154.612 C 987 149.422, 987.748 144.722, 989.402 139.512 L 991.804 131.947 990.331 130.474 C 989.520 129.663, 988.777 129.014, 988.679 129.030 C 988.580 129.047, 987.675 129.540, 986.668 130.126 M 1010.250 129.662 C 1009.563 129.940, 1009 131.265, 1009 132.608 C 1009 133.950, 1010.833 137.951, 1013.073 141.499 C 1015.314 145.046, 1020.238 150.811, 1024.017 154.309 C 1027.795 157.807, 1033.810 162.109, 1037.383 163.868 C 1040.956 165.627, 1047.614 168.010, 1052.180 169.165 C 1058.874 170.858, 1062.324 171.159, 1069.991 170.719 C 1076.273 170.358, 1082.371 169.258, 1087.960 167.477 C 1093.883 165.589, 1097.382 163.818, 1099.631 161.569 C 1101.498 159.702, 1103.130 156.826, 1103.529 154.698 C 1104.033 152.012, 1103.703 150.034, 1102.289 147.269 C 1101.204 145.146, 1098.864 142.713, 1096.931 141.698 C 1094.706 140.529, 1092.189 140.055, 1089.769 140.350 C 1087.718 140.600, 1083.782 142.193, 1081.024 143.890 C 1078.266 145.587, 1073.249 147.905, 1069.875 149.042 C 1065.520 150.509, 1061.238 151.102, 1055.120 151.086 C 1050.093 151.072, 1044.207 150.377, 1041 149.419 C 1037.975 148.516, 1033.267 146.646, 1030.539 145.265 C 1027.810 143.883, 1022.532 139.658, 1018.810 135.876 C 1015.087 132.094, 1011.920 129.036, 1011.771 129.079 C 1011.622 129.122, 1010.938 129.385, 1010.250 129.662 M 997.667 133.667 C 997.300 134.033, 997 137.942, 997 142.353 C 997 146.763, 997.734 153.326, 998.631 156.936 C 999.528 160.546, 1001.731 166.425, 1003.526 170 C 1005.321 173.575, 1008.661 178.845, 1010.948 181.711 C 1013.236 184.576, 1018.121 189.187, 1021.804 191.956 C 1025.487 194.725, 1031.650 198.305, 1035.500 199.911 C 1039.350 201.518, 1046.016 203.554, 1050.313 204.438 C 1056.322 205.673, 1059.028 205.800, 1062.036 204.990 C 1064.514 204.323, 1066.872 202.724, 1068.473 200.624 C 1070.314 198.210, 1071 196.085, 1071 192.790 C 1071 189.667, 1070.330 187.418, 1068.832 185.514 C 1067.640 183.998, 1065.179 182.137, 1063.364 181.379 C 1061.549 180.620, 1056.769 180, 1052.742 180 C 1048.715 180, 1042.738 179.306, 1039.460 178.458 C 1036.182 177.609, 1031.097 175.472, 1028.160 173.708 C 1025.223 171.943, 1020.167 167.877, 1016.924 164.672 C 1013.265 161.055, 1009.882 156.444, 1008.008 152.516 C 1006.347 149.036, 1004.703 144.008, 1004.355 141.344 C 1004.007 138.680, 1003.319 135.713, 1002.826 134.750 C 1002.333 133.787, 1001.120 133, 1000.131 133 C 999.143 133, 998.033 133.300, 997.667 133.667 M 1 182.500 L 1 190 425 190 L 849 190 849 182.500 L 849 175 425 175 L 1 175 1 182.500 M 1151 182.500 L 1151 190 1575 190 L 1999 190 1999 182.500 L 1999 175 1575 175 L 1151 175 1151 182.500 M 1 211.500 L 1 219 425 219 L 849 219 849 211.500 L 849 204 425 204 L 1 204 1 211.500 M 1151 211.500 L 1151 219 1575 219 L 1999 219 1999 211.500 L 1999 204 1575 204 L 1151 204 1151 211.500 M 1163.297 262.046 C 1158.785 262.494, 1152.260 263.574, 1148.797 264.447 C 1145.333 265.320, 1139.759 267.369, 1136.408 269.002 C 1133.057 270.634, 1128.236 273.800, 1125.695 276.038 C 1122.820 278.568, 1119.831 282.628, 1117.787 286.782 L 1114.500 293.458 1114.500 304.979 L 1114.500 316.500 1117.270 322.142 C 1118.794 325.244, 1121.971 329.562, 1124.329 331.736 C 1126.687 333.909, 1131.884 337.596, 1135.877 339.928 C 1139.870 342.260, 1149.506 346.847, 1157.291 350.122 C 1165.075 353.397, 1174.157 357.599, 1177.472 359.461 C 1180.788 361.322, 1185.373 364.456, 1187.662 366.425 C 1189.951 368.394, 1192.764 371.946, 1193.912 374.318 C 1195.462 377.521, 1196 380.570, 1196 386.157 C 1196 390.296, 1195.363 395.799, 1194.584 398.386 C 1193.806 400.973, 1192.060 404.544, 1190.705 406.321 C 1189.349 408.098, 1185.939 410.804, 1183.126 412.335 C 1180.313 413.866, 1175.646 415.496, 1172.756 415.957 C 1169.744 416.437, 1164.997 416.394, 1161.638 415.857 C 1158.414 415.342, 1153.593 413.814, 1150.925 412.462 C 1148.257 411.110, 1144.465 408.591, 1142.499 406.865 C 1140.532 405.138, 1137.722 401.675, 1136.252 399.168 C 1134.783 396.661, 1132.600 391.210, 1131.399 387.055 L 1129.218 379.500 1126.399 379.849 C 1124.849 380.041, 1121.750 380.941, 1119.512 381.849 C 1117.274 382.757, 1114.520 384.175, 1113.392 385 C 1112.263 385.825, 1110.551 387.716, 1109.587 389.202 C 1108.587 390.742, 1107.833 393.805, 1107.833 396.328 C 1107.833 398.823, 1108.732 402.515, 1109.894 404.792 C 1111.027 407.014, 1113.202 409.712, 1114.727 410.788 C 1116.252 411.863, 1119.836 413.920, 1122.691 415.359 C 1125.546 416.797, 1131.396 418.987, 1135.691 420.226 L 1143.500 422.478 1162 422.489 C 1176.558 422.498, 1181.885 422.125, 1187 420.740 C 1190.575 419.772, 1196.773 417.380, 1200.773 415.424 C 1205.076 413.320, 1210.293 409.674, 1213.551 406.493 C 1216.712 403.407, 1220.112 398.812, 1221.536 395.703 C 1222.899 392.725, 1224.496 387.683, 1225.085 384.499 C 1225.863 380.289, 1225.842 376.911, 1225.006 372.110 C 1224.373 368.480, 1222.475 362.919, 1220.788 359.753 C 1219.100 356.587, 1215.868 352.289, 1213.605 350.203 C 1211.342 348.117, 1206.116 344.548, 1201.992 342.271 C 1197.867 339.995, 1187.992 335.606, 1180.047 332.518 C 1172.101 329.430, 1162.956 325.495, 1159.724 323.772 C 1156.492 322.050, 1152.297 318.828, 1150.401 316.614 C 1148.506 314.399, 1146.290 310.349, 1145.477 307.612 C 1144.665 304.876, 1144 300.550, 1144 298 C 1144 295.450, 1144.705 290.989, 1145.567 288.087 C 1146.542 284.803, 1148.628 281.189, 1151.090 278.518 C 1153.266 276.158, 1157.347 273.237, 1160.159 272.027 C 1162.971 270.817, 1167.576 269.590, 1170.393 269.299 C 1173.209 269.008, 1178.885 269.284, 1183.007 269.912 C 1187.128 270.541, 1191.870 271.497, 1193.545 272.037 L 1196.589 273.020 1201.003 286.510 L 1205.417 300 1209.709 300 L 1214 300 1214 282.611 L 1214 265.223 1210.750 264.648 C 1208.963 264.331, 1203.675 263.628, 1199 263.084 C 1194.325 262.541, 1186.225 261.901, 1181 261.664 C 1175.775 261.426, 1167.808 261.598, 1163.297 262.046 M 1936.297 262.066 C 1931.785 262.503, 1925.260 263.574, 1921.797 264.447 C 1918.333 265.320, 1912.575 267.459, 1909 269.202 C 1905.387 270.964, 1900.262 274.620, 1897.461 277.435 C 1894.690 280.221, 1891.422 284.644, 1890.199 287.265 C 1888.976 289.886, 1887.522 295.290, 1886.968 299.274 C 1886.291 304.145, 1886.291 308.263, 1886.970 311.842 C 1887.525 314.770, 1888.833 319.096, 1889.877 321.455 C 1890.921 323.814, 1893.454 327.604, 1895.507 329.876 C 1897.559 332.148, 1902.556 336.075, 1906.611 338.602 C 1910.666 341.129, 1921.253 346.299, 1930.139 350.090 C 1939.025 353.881, 1948.366 358.176, 1950.897 359.634 C 1953.429 361.092, 1957.468 363.871, 1959.874 365.811 C 1962.482 367.914, 1965.204 371.389, 1966.614 374.419 C 1968.391 378.234, 1968.982 381.244, 1968.985 386.500 C 1968.987 390.350, 1968.547 395.091, 1968.007 397.035 C 1967.467 398.979, 1965.749 402.579, 1964.190 405.035 C 1962.308 407.999, 1959.595 410.456, 1956.119 412.344 C 1953.239 413.908, 1948.410 415.524, 1945.387 415.934 C 1942.364 416.344, 1937.404 416.290, 1934.364 415.813 C 1931.324 415.337, 1926.287 413.648, 1923.169 412.061 C 1920.051 410.474, 1915.836 407.448, 1913.802 405.338 C 1911.769 403.227, 1908.975 399.025, 1907.595 396 C 1906.214 392.975, 1904.448 388.025, 1903.670 385 L 1902.255 379.500 1899.878 379.807 C 1898.570 379.976, 1895.925 380.593, 1894 381.178 C 1892.075 381.764, 1888.980 383.160, 1887.123 384.281 C 1885.041 385.538, 1882.992 388.024, 1881.781 390.762 C 1880.369 393.955, 1880.006 396.231, 1880.492 398.852 C 1880.864 400.859, 1882.097 404.011, 1883.232 405.857 C 1884.367 407.703, 1887.591 410.681, 1890.398 412.473 C 1893.204 414.266, 1898.693 416.883, 1902.595 418.289 C 1906.497 419.695, 1913.388 421.386, 1917.907 422.047 C 1922.924 422.780, 1931.649 423.047, 1940.312 422.731 C 1948.621 422.428, 1956.986 421.542, 1960.500 420.592 C 1963.800 419.700, 1969.713 417.401, 1973.640 415.484 C 1977.892 413.409, 1983.001 409.814, 1986.269 406.598 C 1989.287 403.628, 1992.984 398.688, 1994.484 395.621 C 1995.985 392.554, 1997.536 387.306, 1997.930 383.959 C 1998.325 380.611, 1998.307 375.362, 1997.891 372.293 C 1997.474 369.225, 1995.754 363.911, 1994.067 360.484 C 1992.380 357.058, 1989.085 352.490, 1986.745 350.333 C 1984.405 348.176, 1979.117 344.572, 1974.995 342.324 C 1970.873 340.076, 1960.473 335.465, 1951.884 332.076 C 1943.295 328.687, 1933.864 324.471, 1930.925 322.707 C 1927.986 320.943, 1924.113 317.569, 1922.318 315.208 C 1920.523 312.847, 1918.542 309.022, 1917.916 306.708 C 1917.290 304.394, 1916.982 299.350, 1917.231 295.500 C 1917.525 290.954, 1918.470 286.966, 1919.927 284.124 C 1921.160 281.717, 1923.369 278.632, 1924.835 277.269 C 1926.301 275.906, 1929.681 273.683, 1932.348 272.329 C 1935.452 270.753, 1939.588 269.685, 1943.848 269.360 C 1947.758 269.062, 1953.967 269.480, 1958.911 270.374 C 1963.538 271.210, 1967.863 272.481, 1968.524 273.197 C 1969.185 273.914, 1971.654 280.238, 1974.011 287.250 L 1978.297 300 1982.648 300 L 1987 300 1987 282.637 L 1987 265.274 1979.750 264.118 C 1975.763 263.482, 1966.875 262.531, 1960 262.004 C 1953.125 261.477, 1946.825 261.096, 1946 261.159 C 1945.175 261.221, 1940.808 261.630, 1936.297 262.066 M 1.443 266.288 C 1.171 266.997, 1.073 274.985, 1.224 284.038 L 1.500 300.500 5.092 300.801 L 8.685 301.102 14.172 287.801 L 19.660 274.500 37.830 274.227 L 56 273.955 56 342.898 L 56 411.841 53.250 412.377 C 51.737 412.672, 47.013 413.211, 42.750 413.574 L 35 414.235 35 417.617 L 35 421 72 421 L 109 421 109 417.585 L 109 414.171 101.250 413.526 C 96.987 413.171, 92.263 412.647, 90.750 412.361 L 88 411.841 88 342.921 L 88 274 106.274 274 L 124.548 274 129.963 287.500 L 135.379 301 139.189 301 L 143 301 143 283 L 143 265 72.469 265 C 15.845 265, 1.840 265.254, 1.443 266.288 M 153.187 268.250 L 153.500 271.500 163.250 272.372 L 173 273.244 173 342.514 L 173 411.783 170.750 412.315 C 169.512 412.607, 164.988 413.161, 160.696 413.545 L 152.892 414.245 153.196 417.373 L 153.500 420.500 189.250 420.763 L 225 421.025 225 417.614 L 225 414.203 217.750 413.549 C 213.762 413.189, 209.262 412.658, 207.750 412.368 L 205 411.841 205 377.921 L 205 344 241 344 L 277 344 277 377.892 L 277 411.783 274.750 412.315 C 273.512 412.607, 268.988 413.161, 264.696 413.545 L 256.892 414.245 257.196 417.373 L 257.500 420.500 293.250 420.763 L 329 421.025 329 417.614 L 329 414.203 321.750 413.549 C 317.762 413.189, 313.262 412.658, 311.750 412.368 L 309 411.841 309 342.570 L 309 273.299 318.750 272.400 L 328.500 271.500 328.813 268.250 L 329.127 265 293 265 L 256.873 265 257.187 268.250 L 257.500 271.500 267.250 272.372 L 277 273.244 277 304.122 L 277 335 241 335 L 205 335 205 304.150 L 205 273.299 214.750 272.400 L 224.500 271.500 224.813 268.250 L 225.127 265 189 265 L 152.873 265 153.187 268.250 M 343.384 266.442 C 343.080 267.234, 342.986 268.697, 343.177 269.692 L 343.523 271.500 353.511 272.500 L 363.500 273.500 363.757 342.688 L 364.014 411.875 359.757 412.435 C 357.416 412.742, 352.800 413.336, 349.500 413.753 L 343.500 414.512 343.500 417.506 L 343.500 420.500 406.500 420.500 L 469.500 420.500 470.668 407 C 471.311 399.575, 471.873 391.587, 471.918 389.250 L 472 385 468.146 385 L 464.292 385 458.297 398.250 L 452.302 411.500 423.651 411.765 L 395 412.031 395 378.015 L 395 344 417.260 344 L 439.521 344 443 353 L 446.479 362 450.240 362 L 454 362 454 340 L 454 318 450.233 318 L 446.466 318 443.058 326.500 L 439.651 335 417.326 335 L 395 335 395 304.483 L 395 273.966 420.172 274.233 L 445.345 274.500 449.811 286.750 L 454.277 299 458.138 299 L 462 299 462 282 L 462 265 402.969 265 L 343.937 265 343.384 266.442 M 541.187 268.250 L 541.500 271.500 551.500 272.500 L 561.500 273.500 561.500 341 L 561.500 408.500 553.250 411.363 L 545 414.227 545 417.632 L 545 421.037 568.250 420.768 L 591.500 420.500 591.803 417.387 L 592.106 414.273 582.053 411.466 L 572 408.658 572 351.607 L 572 294.556 573.876 296.528 C 574.908 297.613, 598.102 326.063, 625.417 359.750 L 675.082 421 683.034 421 L 690.987 421 691.243 348.811 L 691.500 276.623 699.250 274.108 L 707 271.594 707 268.297 L 707 265 683.500 265 L 660 265 660 268.253 L 660 271.505 668.750 274.040 L 677.500 276.574 677.759 327.917 C 677.967 369.100, 677.769 379.053, 676.759 378.215 C 676.067 377.640, 655.250 351.936, 630.500 321.095 L 585.500 265.021 563.187 265.011 L 540.873 265 541.187 268.250 M 724 268.384 L 724 271.784 734 272.500 L 744 273.216 744 342.528 L 744 411.841 741.250 412.368 C 739.737 412.658, 735.237 413.189, 731.250 413.549 L 724 414.203 724 417.609 L 724 421.015 786.750 420.758 L 849.500 420.500 850.649 408.500 C 851.282 401.900, 851.844 393.913, 851.899 390.750 L 852 385 848.226 385 L 844.452 385 838.446 398.250 L 832.440 411.500 803.720 411.765 L 775 412.031 775 378.015 L 775 344 797.387 344 L 819.774 344 823.110 353 L 826.445 362 830.222 362 L 834 362 834 339.940 L 834 317.879 830.267 318.190 L 826.534 318.500 823.126 326.750 L 819.718 335 797.359 335 L 775 335 775 304.483 L 775 273.966 800.246 274.233 L 825.492 274.500 829.988 286.796 L 834.484 299.091 838.492 298.796 L 842.500 298.500 842.500 282 L 842.500 265.500 783.250 265.242 L 724 264.984 724 268.384 M 851.187 268.250 L 851.500 271.500 860.168 272.394 L 868.835 273.288 899.239 347.394 L 929.642 421.500 937.052 421.500 L 944.462 421.500 962.451 376.250 C 972.345 351.363, 980.708 331, 981.035 331 C 981.363 331, 989.993 351.363, 1000.214 376.250 L 1018.796 421.500 1026.148 421.762 L 1033.500 422.024 1060.585 349.823 L 1087.669 277.622 1096.332 274.561 L 1104.994 271.500 1104.997 268.250 L 1105 265 1080.437 265 L 1055.873 265 1056.187 268.240 L 1056.500 271.479 1065.917 274.240 C 1071.097 275.759, 1075.524 277.191, 1075.756 277.422 C 1075.988 277.654, 1067.281 302.179, 1056.409 331.922 C 1045.536 361.665, 1036.383 385.996, 1036.070 385.992 C 1035.756 385.987, 1025.734 361.350, 1013.798 331.242 C 1001.862 301.134, 991.828 275.783, 991.501 274.906 L 990.906 273.313 999.703 272.406 L 1008.500 271.500 1008.813 268.250 L 1009.127 265 975 265 L 940.873 265 941.187 268.250 L 941.500 271.500 949.912 272.500 L 958.323 273.500 966.662 293.969 C 971.248 305.228, 975.012 314.903, 975.026 315.469 C 975.040 316.036, 968.889 332.137, 961.357 351.250 C 953.825 370.363, 947.383 386, 947.043 386 C 946.702 386, 936.390 360.763, 924.127 329.918 C 911.865 299.072, 901.982 273.704, 902.166 273.543 C 902.350 273.382, 906.100 272.856, 910.500 272.375 L 918.500 271.500 918.813 268.250 L 919.127 265 885 265 L 850.873 265 851.187 268.250 M 1286 283.060 L 1286 301.121 1289.695 300.810 L 1293.389 300.500 1295.782 294.500 C 1297.099 291.200, 1299.528 285.238, 1301.181 281.250 L 1304.187 274 1322.593 274 L 1341 274 1341 342.889 L 1341 411.777 1337.750 412.333 C 1335.963 412.638, 1331.013 413.191, 1326.750 413.562 L 1319 414.235 1319 417.630 L 1319 421.024 1356.250 420.762 L 1393.500 420.500 1393.804 417.373 L 1394.108 414.245 1386.304 413.567 C 1382.012 413.194, 1377.037 412.638, 1375.250 412.333 L 1372 411.777 1372 342.889 L 1372 274 1390.363 274 L 1408.727 274 1414.188 287.250 L 1419.649 300.500 1423.325 300.810 L 1427 301.121 1427 283.060 L 1427 265 1356.500 265 L 1286 265 1286 283.060 M 1438 268.379 L 1438 271.784 1448 272.500 L 1458 273.216 1458 342.528 L 1458 411.841 1455.250 412.368 C 1453.737 412.658, 1449.237 413.189, 1445.250 413.549 L 1438 414.203 1438 417.614 L 1438 421.025 1473.750 420.763 L 1509.500 420.500 1509.500 417.506 L 1509.500 414.512 1503.500 413.753 C 1500.200 413.336, 1495.584 412.742, 1493.243 412.435 L 1488.986 411.875 1489.243 342.688 L 1489.500 273.500 1499.500 272.500 L 1509.500 271.500 1509.500 268.500 L 1509.500 265.500 1473.750 265.237 L 1438 264.975 1438 268.379 M 1527 267.892 C 1527 270.059, 1527.563 270.922, 1529.250 271.337 C 1530.487 271.642, 1534.961 272.201, 1539.192 272.578 L 1546.884 273.265 1546.426 281.383 C 1546.174 285.847, 1545.307 310.425, 1544.500 336 C 1543.692 361.575, 1542.750 388.217, 1542.407 395.204 L 1541.782 407.908 1532.391 411.036 L 1523 414.165 1523 417.582 L 1523 421 1547 421 L 1571 421 1571 417.640 L 1571 414.280 1561.500 411.474 L 1552 408.669 1552.009 403.084 C 1552.014 400.013, 1552.904 375.273, 1553.987 348.106 C 1555.069 320.939, 1556.101 298.565, 1556.280 298.386 C 1556.459 298.207, 1568.837 325.609, 1583.786 359.280 L 1610.966 420.500 1617.280 420.791 L 1623.595 421.082 1646.757 358.291 L 1669.919 295.500 1670.012 300.500 C 1670.063 303.250, 1671.359 329.350, 1672.892 358.500 C 1674.425 387.650, 1675.548 411.666, 1675.387 411.869 C 1675.227 412.072, 1671.249 412.704, 1666.548 413.275 L 1658 414.311 1658 417.656 L 1658 421 1691 421 L 1724 421 1724 417.656 L 1724 414.311 1715.452 413.275 C 1710.751 412.704, 1706.727 412.061, 1706.510 411.844 C 1706.294 411.627, 1705.201 386.261, 1704.082 355.475 C 1702.963 324.689, 1701.761 293.604, 1701.411 286.398 L 1700.775 273.296 1708.637 272.594 C 1712.962 272.208, 1717.513 271.642, 1718.750 271.337 C 1720.441 270.921, 1721 270.060, 1721 267.874 L 1721 264.966 1695.768 265.233 L 1670.535 265.500 1648.441 325.244 C 1636.289 358.103, 1626.156 385.169, 1625.923 385.390 C 1625.690 385.611, 1613.825 358.614, 1599.555 325.396 L 1573.611 265 1550.305 265 L 1527 265 1527 267.892 M 1738 268.392 L 1738 271.784 1748 272.500 L 1758 273.216 1758 342.528 L 1758 411.841 1755.250 412.368 C 1753.737 412.658, 1749.237 413.189, 1745.250 413.549 L 1738 414.203 1738 417.601 L 1738 421 1800.531 421 C 1849.659 421, 1863.156 420.732, 1863.495 419.750 C 1863.733 419.063, 1864.524 411.168, 1865.253 402.206 C 1865.982 393.244, 1866.373 385.706, 1866.122 385.456 C 1865.872 385.205, 1864.054 385.001, 1862.083 385.002 L 1858.500 385.004 1852.500 398.482 L 1846.500 411.961 1817.750 411.980 L 1789 412 1789 378 L 1789 344 1811.331 344 L 1833.663 344 1837.118 352.750 L 1840.574 361.500 1844.287 361.810 L 1848 362.121 1848 340 L 1848 317.879 1844.329 318.190 L 1840.657 318.500 1837.184 326.750 L 1833.711 335 1811.356 335 L 1789 335 1789 304.500 L 1789 274 1814.259 274 L 1839.517 274 1844.009 286.543 L 1848.500 299.086 1852.500 298.793 L 1856.500 298.500 1856.774 281.750 L 1857.048 265 1797.524 265 L 1738 265 1738 268.392"
        stroke="none"
        fillRule="evenodd"
        className="fill-current"
      />
    </svg>
  );
}

export default Logo;
