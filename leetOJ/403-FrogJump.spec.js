import {expect} from 'chai';
import canCross from './403-FrogJump';

describe('LeetOJ 403-FrogJump', () => {
  describe('canCross', () => {
    it('should work with given example 1', () => {
      const stones = [0, 1, 3, 5, 6, 8, 12, 17];
      expect(canCross(stones)).to.be.true;
    });
    it('should work with given example 2', () => {
      const stones = [0, 1, 2, 3, 4, 8, 9, 11];
      expect(canCross(stones)).to.be.false;
    });
    it('should work with test case [0]', () => {
      const stones = [0];
      expect(canCross(stones)).to.be.true;
    });
    it('should work with test case [0, 1]', () => {
      const stones = [0, 1];
      expect(canCross(stones)).to.be.true;
    });
    it('should work with test case [0, 2]', () => {
      const stones = [0, 2];
      expect(canCross(stones)).to.be.false;
    });
    it('should work with test case [0, 1, 2]', () => {
      const stones = [0, 1, 2];
      expect(canCross(stones)).to.be.true;
    });
    it('should work with test case [0, 1, 3]', () => {
      const stones = [0, 1, 3];
      expect(canCross(stones)).to.be.true;
    });
    it('should work with test case [0, 1, 4]', () => {
      const stones = [0, 1, 4];
      expect(canCross(stones)).to.be.false;
    });
    it('should work with test case Long 1', () => {
      const stones = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440, 441, 442, 443, 444, 445, 446, 447, 448, 449, 450, 451, 452, 453, 454, 455, 456, 457, 458, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480, 481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540, 541, 542, 543, 544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560, 561, 562, 563, 564, 565, 566, 567, 568, 569, 570, 571, 572, 573, 574, 575, 576, 577, 578, 579, 580, 581, 582, 583, 584, 585, 586, 587, 588, 589, 590, 591, 592, 593, 594, 595, 596, 597, 598, 599, 600, 601, 602, 603, 604, 605, 606, 607, 608, 609, 610, 611, 612, 613, 614, 615, 616, 617, 618, 619, 620, 621, 622, 623, 624, 625, 626, 627, 628, 629, 630, 631, 632, 633, 634, 635, 636, 637, 638, 639, 640, 641, 642, 643, 644, 645, 646, 647, 648, 649, 650, 651, 652, 653, 654, 655, 656, 657, 658, 659, 660, 661, 662, 663, 664, 665, 666, 667, 668, 669, 670, 671, 672, 673, 674, 675, 676, 677, 678, 679, 680, 681, 682, 683, 684, 685, 686, 687, 688, 689, 690, 691, 692, 693, 694, 695, 696, 697, 698, 699, 700, 701, 702, 703, 704, 705, 706, 707, 708, 709, 710, 711, 712, 713, 714, 715, 716, 717, 718, 719, 720, 721, 722, 723, 724, 725, 726, 727, 728, 729, 730, 731, 732, 733, 734, 735, 736, 737, 738, 739, 740, 741, 742, 743, 744, 745, 746, 747, 748, 749, 750, 751, 752, 753, 754, 755, 756, 757, 758, 759, 760, 761, 762, 763, 764, 765, 766, 767, 768, 769, 770, 771, 772, 773, 774, 775, 776, 777, 778, 779, 780, 781, 782, 783, 784, 785, 786, 787, 788, 789, 790, 791, 792, 793, 794, 795, 796, 797, 798, 799, 800, 801, 802, 803, 804, 805, 806, 807, 808, 809, 810, 811, 812, 813, 814, 815, 816, 817, 818, 819, 820, 821, 822, 823, 824, 825, 826, 827, 828, 829, 830, 831, 832, 833, 834, 835, 836, 837, 838, 839, 840, 841, 842, 843, 844, 845, 846, 847, 848, 849, 850, 851, 852, 853, 854, 855, 856, 857, 858, 859, 860, 861, 862, 863, 864, 865, 866, 867, 868, 869, 870, 871, 872, 873, 874, 875, 876, 877, 878, 879, 880, 881, 882, 883, 884, 885, 886, 887, 888, 889, 890, 891, 892, 893, 894, 895, 896, 897, 898, 899, 900, 901, 902, 903, 904, 905, 906, 907, 908, 909, 910, 911, 912, 913, 914, 915, 916, 917, 918, 919, 920, 921, 922, 923, 924, 925, 926, 927, 928, 929, 930, 931, 932, 933, 934, 935, 936, 937, 938, 939, 940, 941, 942, 943, 944, 945, 946, 947, 948, 949, 950, 951, 952, 953, 954, 955, 956, 957, 958, 959, 960, 961, 962, 963, 964, 965, 966, 967, 968, 969, 970, 971, 972, 973, 974, 975, 976, 977, 978, 979, 980, 981, 982, 983, 984, 985, 986, 987, 988, 989, 990, 991, 992, 993, 994, 995, 996, 997, 998, 1035];
      expect(canCross(stones)).to.be.true;
    });
    it('should work with test case Long 2', () => {
      const stones = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440, 441, 442, 443, 444, 445, 446, 447, 448, 449, 450, 451, 452, 453, 454, 455, 456, 457, 458, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480, 481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540, 541, 542, 543, 544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560, 561, 562, 563, 564, 565, 566, 567, 568, 569, 570, 571, 572, 573, 574, 575, 576, 577, 578, 579, 580, 581, 582, 583, 584, 585, 586, 587, 588, 589, 590, 591, 592, 593, 594, 595, 596, 597, 598, 599, 600, 601, 602, 603, 604, 605, 606, 607, 608, 609, 610, 611, 612, 613, 614, 615, 616, 617, 618, 619, 620, 621, 622, 623, 624, 625, 626, 627, 628, 629, 630, 631, 632, 633, 634, 635, 636, 637, 638, 639, 640, 641, 642, 643, 644, 645, 646, 647, 648, 649, 650, 651, 652, 653, 654, 655, 656, 657, 658, 659, 660, 661, 662, 663, 664, 665, 666, 667, 668, 669, 670, 671, 672, 673, 674, 675, 676, 677, 678, 679, 680, 681, 682, 683, 684, 685, 686, 687, 688, 689, 690, 691, 692, 693, 694, 695, 696, 697, 698, 699, 700, 701, 702, 703, 704, 705, 706, 707, 708, 709, 710, 711, 712, 713, 714, 715, 716, 717, 718, 719, 720, 721, 722, 723, 724, 725, 726, 727, 728, 729, 730, 731, 732, 733, 734, 735, 736, 737, 738, 739, 740, 741, 742, 743, 744, 745, 746, 747, 748, 749, 750, 751, 752, 753, 754, 755, 756, 757, 758, 759, 760, 761, 762, 763, 764, 765, 766, 767, 768, 769, 770, 771, 772, 773, 774, 775, 776, 777, 778, 779, 780, 781, 782, 783, 784, 785, 786, 787, 788, 789, 790, 791, 792, 793, 794, 795, 796, 797, 798, 799, 800, 801, 802, 803, 804, 805, 806, 807, 808, 809, 810, 811, 812, 813, 814, 815, 816, 817, 818, 819, 820, 821, 822, 823, 824, 825, 826, 827, 828, 829, 830, 831, 832, 833, 834, 835, 836, 837, 838, 839, 840, 841, 842, 843, 844, 845, 846, 847, 848, 849, 850, 851, 852, 853, 854, 855, 856, 857, 858, 859, 860, 861, 862, 863, 864, 865, 866, 867, 868, 869, 870, 871, 872, 873, 874, 875, 876, 877, 878, 879, 880, 881, 882, 883, 884, 885, 886, 887, 888, 889, 890, 891, 892, 893, 894, 895, 896, 897, 898, 899, 900, 901, 902, 903, 904, 905, 906, 907, 908, 909, 910, 911, 912, 913, 914, 915, 916, 917, 918, 919, 920, 921, 922, 923, 924, 925, 926, 927, 928, 929, 930, 931, 932, 933, 934, 935, 936, 937, 938, 939, 940, 941, 942, 943, 944, 945, 946, 947, 948, 949, 950, 951, 952, 953, 954, 955, 956, 957, 958, 959, 960, 961, 962, 963, 964, 965, 966, 967, 968, 969, 970, 971, 972, 973, 974, 975, 976, 977, 978, 979, 980, 981, 982, 983, 984, 985, 986, 987, 988, 989, 990, 991, 992, 993, 994, 995, 996, 997, 998, 99999999];
      expect(canCross(stones)).to.be.false;
    });
    it('should work with test case Long 3', () => {
      const stones = [0, 1, 8753, 13918, 15296, 18937, 21862, 24163, 27446, 28035, 30408, 30993, 32241, 33268, 39429, 40743, 50325, 51872, 52753, 59155, 60563, 67354, 69367, 70036, 75935, 81053, 86618, 90214, 98237, 105629, 106688, 110188, 115601, 123202, 128900, 135707, 143408, 151743, 155702, 163667, 172128, 181286, 188829, 195039, 200418, 206263, 212006, 213121, 215608, 224054, 231138, 236853, 245177, 253771, 263301, 269665, 278747, 283876, 285714, 286990, 296210, 298102, 305943, 308691, 312911, 315650, 324690, 326416, 329403, 333827, 341641, 345585, 347610, 348787, 352749, 353943, 360666, 367124, 375306, 377109, 379095, 383365, 384973, 387579, 390066, 390342, 392935, 394918, 403333, 406424, 415678, 422202, 424292, 431772, 437211, 445634, 450224, 453049, 455243, 455664, 457299, 463486, 472544, 473426, 480415, 489499, 489959, 497162, 506521, 516260, 522193, 526577, 530775, 539715, 545412, 551881, 554654, 555843, 563635, 570349, 570975, 572919, 576049, 584667, 587863, 590448, 599725, 603665, 611263, 618924, 622211, 630337, 632668, 637661, 641915, 645584, 649932, 657950, 663647, 670221, 671248, 671399, 675876, 680368, 689322, 693390, 693691, 695817, 704138, 705534, 707104, 707410, 714976, 724284, 733786, 741090, 750680, 750944, 755368, 763598, 767236, 776317, 776638, 780995, 782731, 784807, 793537, 799207, 808132, 808864, 815510, 824437, 830355, 838014, 840992, 849338, 857054, 865204, 875053, 883545, 888840, 897427, 902211, 903346, 908957, 915794, 925692, 934192, 942608, 944841, 951390, 957199, 966831, 976388, 980657, 990240, 997973, 1007486, 1017086, 1023500, 1026446, 1034588, 1043437, 1045193, 1051433, 1053453, 1057418, 1060234, 1062518, 1066042, 1075431, 1082183, 1086799, 1091625, 1097837, 1100091, 1106337, 1110027, 1118233, 1119549, 1124094, 1133634, 1135147, 1143531, 1143546, 1150794, 1151139, 1155954, 1163842, 1167148, 1173717, 1180943, 1183606, 1186001, 1194357, 1200544, 1203910, 1206095, 1206603, 1212671, 1213059, 1218249, 1221653, 1226372, 1235693, 1240498, 1244382, 1253584, 1259465, 1262744, 1269762, 1279272, 1289098, 1294455, 1302318, 1310444, 1315778, 1323383, 1326649, 1328596, 1333766, 1343456, 1352582, 1357006, 1360376, 1360415, 1361979, 1366197, 1371719, 1374333, 1376136, 1382937, 1389076, 1398801, 1405281, 1408692, 1411624, 1418860, 1421778, 1431337, 1439723, 1449355, 1451160, 1453739, 1458882, 1461762, 1463022, 1470237, 1475159, 1484814, 1490617, 1498790, 1502064, 1503595, 1512730, 1518789, 1520065, 1520404, 1525772, 1528869, 1534260, 1541301, 1546295, 1550423, 1556366, 1556968, 1559584, 1561508, 1563310, 1565382, 1567846, 1575213, 1582018, 1591322, 1600458, 1602931, 1611917, 1615998, 1618822, 1627715, 1633452, 1642900, 1646670, 1654660, 1661512, 1668917, 1672736, 1674417, 1680625, 1690109, 1691280, 1695031, 1700647, 1702610, 1709719, 1713321, 1721089, 1722846, 1723613, 1727164, 1729091, 1738776, 1745591, 1752191, 1758111, 1765760, 1771553, 1773791, 1782303, 1783101, 1786382, 1793160, 1795828, 1799594, 1808162, 1808814, 1809249, 1817381, 1820420, 1825755, 1833190, 1842615, 1847555, 1851422, 1853110, 1857967, 1865834, 1866090, 1872739, 1880648, 1887943, 1888834, 1897137, 1899170, 1907635, 1912091, 1920308, 1920720, 1926993, 1928644, 1931324, 1931851, 1940322, 1946210, 1947657, 1953958, 1958209, 1965583, 1974228, 1982800, 1991751, 2001281, 2009327, 2011007, 2014866, 2021612, 2024056, 2026255, 2026286, 2027251, 2031552, 2041037, 2045987, 2048993, 2052162, 2058377, 2065751, 2072018, 2076769, 2078876, 2080908, 2085991, 2087875, 2091021, 2092559, 2100722, 2109919, 2114824, 2116955, 2126117, 2130114, 2134481, 2142480, 2144414, 2145701, 2147127, 2150143, 2157008, 2158183, 2160247, 2166194, 2167785, 2176458, 2183966, 2188580, 2195649, 2200320, 2206522, 2214573, 2215794, 2216483, 2218186, 2222225, 2225147, 2229214, 2230056, 2237079, 2237129, 2239689, 2246982, 2253653, 2254396, 2258370, 2260478, 2267766, 2277299, 2278417, 2287806, 2288161, 2288687, 2297443, 2298334, 2302661, 2308400, 2311310, 2320757, 2329858, 2334793, 2340007, 2343272, 2344192, 2346005, 2347553, 2350770, 2354253, 2359021, 2363054, 2363880, 2365944, 2372697, 2379460, 2381039, 2387618, 2387967, 2392933, 2393571, 2396276, 2401102, 2410684, 2416674, 2424791, 2426283, 2428259, 2432925, 2439113, 2441600, 2445892, 2454605, 2462256, 2470491, 2470937, 2480369, 2488477, 2491681, 2500879, 2504072, 2513932, 2522862, 2531635, 2531764, 2535499, 2541049, 2550856, 2552794, 2554172, 2557769, 2562144, 2566494, 2570232, 2571726, 2573397, 2573493, 2573622, 2575285, 2581908, 2582350, 2584970, 2589167, 2599091, 2606894, 2610417, 2614259, 2619966, 2625626, 2628848, 2633158, 2633298, 2642610, 2642924, 2645855, 2646417, 2648030, 2656980, 2662914, 2662957, 2667924, 2668482, 2674996, 2678503, 2688189, 2688984, 2695076, 2700544, 2702276, 2708853, 2711264, 2715331, 2717179, 2723983, 2731557, 2739282, 2746480, 2752796, 2756122, 2766072, 2772009, 2773304, 2781793, 2782103, 2791775, 2800540, 2806969, 2812680, 2814624, 2823230, 2826049, 2833737, 2842304, 2851738, 2859029, 2860565, 2866891, 2867860, 2872579, 2880297, 2882626, 2888734, 2897527, 2897579, 2901572, 2910021, 2910700, 2913831, 2922302, 2929430, 2929718, 2933562, 2936314, 2940405, 2947812, 2951295, 2957785, 2961027, 2965746, 2975016, 2976294, 2981138, 2983207, 2985794, 2992934, 3001148, 3005666, 3008431, 3017047, 3025640, 3029741, 3032174, 3032731, 3037898, 3044643, 3048974, 3050382, 3056713, 3056849, 3064465, 3067435, 3077032, 3078384, 3087134, 3093925, 3100991, 3105197, 3106567, 3110693, 3115784, 3121814, 3125185, 3134544, 3141094, 3144338, 3146541, 3148125, 3155080, 3162925, 3170181, 3174343, 3178715, 3180735, 3190403, 3197276, 3197375, 3200298, 3206001, 3212272, 3216446, 3218061, 3227460, 3236440, 3243432, 3248608, 3254422, 3255338, 3257699, 3262707, 3264366, 3273462, 3275348, 3278554, 3283364, 3287578, 3294358, 3297566, 3298570, 3301471, 3306821, 3315679, 3323291, 3332908, 3339556, 3341890, 3349221, 3358098, 3363225, 3372212, 3378804, 3379070, 3387983, 3391282, 3398049, 3404447, 3405567, 3411267, 3418507, 3423187, 3427025, 3427648, 3429752, 3431346, 3440504, 3448979, 3456180, 3458157, 3464034, 3473964, 3483495, 3491464, 3493411, 3496358, 3498000, 3498611, 3504659, 3508980, 3510061, 3514622, 3520163, 3525401, 3532462, 3537351, 3539660, 3544768, 3553611, 3554230, 3554278, 3555340, 3555560, 3560810, 3564349, 3564375, 3566469, 3573173, 3579470, 3579536, 3585279, 3588195, 3588620, 3591429, 3599325, 3606806, 3609417, 3619031, 3621081, 3630005, 3633218, 3633545, 3638953, 3644916, 3645092, 3652733, 3660016, 3660880, 3664333, 3664779, 3674596, 3683784, 3693474, 3696380, 3705530, 3710528, 3711472, 3716286, 3717651, 3718889, 3727839, 3732881, 3741506, 3749464, 3751595, 3761022, 3761731, 3763757, 3764483, 3769745, 3770129, 3770219, 3777724, 3780547, 3785169, 3790572, 3800138, 3809349, 3816550, 3817315, 3825656, 3828249, 3829174, 3838237, 3844483, 3847153, 3848609, 3849078, 3858451, 3864064, 3872232, 3874317, 3878180, 3879253, 3882675, 3885523, 3886832, 3894327, 3903717, 3913052, 3922075, 3926186, 3933673, 3942601, 3943012, 3950901, 3954817, 3963720, 3966104, 3971545, 3978625, 3984575, 3991789, 3999747, 4002404, 4011056, 4014914, 4019810, 4020841, 4027987, 4032985, 4039747, 4046837, 4047346, 4048397, 4053622, 4055855, 4062094, 4063291, 4065098, 4070800, 4080423, 4085114, 4087044, 4093759, 4096731, 4096964, 4100034, 4102065, 4104360, 4107346, 4108894, 4118699, 4123437, 4132164, 4138494, 4141372, 4148274, 4149269, 4156260, 4163945, 4164873, 4169237, 4174060, 4178377, 4187033, 4194571, 4204154, 4212197, 4214549, 4214963, 4223378, 4227316, 4231545, 4234303, 4244167, 4246810, 4254230, 4260743, 4270453, 4279363, 4284521, 4286677, 4290997, 4300110, 4301184, 4309525, 4311967, 4319630, 4326442, 4334738, 4342587, 4347860, 4353560, 4357942, 4362098, 4368348, 4374015, 4376513, 4377664, 4380878, 4387575, 4390994, 4391695, 4396434, 4400569, 4406925, 4407742, 4409573, 4410272, 4419218, 4421194, 4424305, 4424980, 4429602, 4437287, 4440350, 4446758, 4450882, 4453907, 4459677, 4464986, 4467288, 4475620, 4481638, 4484380, 4493830, 4499582, 4506064, 4512169, 4512623, 4519378, 4527749, 4536720, 4542806, 4546346, 4547999, 4550128, 4551081, 4558404, 4560594, 4565565, 4572052, 4572147, 4582029, 4589201, 4598067, 4599902, 4601288, 4603000, 4611386, 4612644, 4621015, 4621528, 4629651, 4631415, 4639050, 4642502, 4647000, 4651256, 4656800, 4659521, 4669125, 4670827, 4679777, 4685405, 4687959, 4690076, 4691532, 4693008, 4698951, 4705941, 4709920, 4717297, 4726077, 4733590, 4735105, 4740447, 4749008, 4756476, 4765828, 4775052, 4778543, 4788148, 4791696, 4800442, 4801897, 4802293, 4811008, 4813289, 4822886, 4829635, 4834771, 4834972, 4839009, 4845288, 4853377, 4861750, 4866567, 4875072, 4877392, 4885756, 4887555, 4890989, 4895488, 4898552, 4904286, 4908425, 4911685, 4919202];
      expect(canCross(stones)).to.be.false;
    });

  });
});
