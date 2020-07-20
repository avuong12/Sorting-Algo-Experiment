const quicksortInsertionData = {
  '8': {
    8: [0.02096, 0.041],
    16: [0.00591, 0.002],
    32: [0.00496, 0.001],
    64: [0.00494, 0.001],
    103: [0.0049, 0],
    128: [0.00475, 0.001],
  },
  '16': {
    8: [0.01926, 0.018],
    16: [0.01239, 0.001],
    32: [0.01131, 0.002],
    64: [0.01273, 0.002],
    103: [0.01195, 0.001],
    128: [0.01215, 0.001],
  },
  '32': {
    8: [0.04269, 0.053],
    16: [0.02932, 0.01],
    32: [0.04939, 0.073],
    64: [0.02438, 0.003],
    103: [0.02383, 0.002],
    128: [0.02449, 0.002],
  },
  '64': {
    8: [0.03645, 0.008],
    16: [0.05494, 0.084],
    32: [0.03276, 0.011],
    64: [0.01461, 0.001],
    103: [0.01472, 0.001],
    128: [0.01447, 0.001],
  },
  '128': {
    8: [0.09363, 0.082],
    16: [0.03941, 0.005],
    32: [0.02821, 0.007],
    64: [0.01057, 0.001],
    103: [0.01112, 0.001],
    128: [0.01279, 0.001],
  },
  '256': {
    8: [0.03451, 0.001],
    16: [0.02724, 0],
    32: [0.02392, 0.001],
    64: [0.0226, 0.001],
    103: [0.02686, 0.008],
    128: [0.0255, 0.001],
  },
  '512': {
    8: [0.13608, 0.172],
    16: [0.08951, 0.003],
    32: [0.07603, 0.003],
    64: [0.07265, 0.007],
    103: [0.07443, 0.007],
    128: [0.07767, 0.022],
  },
  '1024': {
    8: [0.09166, 0.002],
    16: [0.08892, 0.007],
    32: [0.08424, 0.002],
    64: [0.09029, 0.006],
    103: [0.09444, 0.002],
    128: [0.10347, 0.004],
  },
  '2048': {
    8: [0.19592, 0.008],
    16: [0.1878, 0.006],
    32: [0.18583, 0.005],
    64: [0.18954, 0.004],
    103: [0.20124, 0.003],
    128: [0.54527, 1.049],
  },
  '4096': {
    8: [0.32579, 0.003],
    16: [0.31205, 0.012],
    32: [0.30937, 0.013],
    64: [0.31832, 0.004],
    103: [0.34896, 0.004],
    128: [0.37711, 0.016],
  },
  '8192': {
    8: [0.68805, 0.005],
    16: [0.71161, 0.138],
    32: [0.65113, 0.005],
    64: [0.67851, 0.006],
    103: [0.73782, 0.006],
    128: [0.81927, 0.128],
  },
  '16384': {
    8: [1.58878, 0.055],
    16: [1.49254, 0.015],
    32: [1.8027, 0.444],
    64: [1.74328, 0.275],
    103: [1.71797, 0.163],
    128: [1.74745, 0.026],
  },
  '32768': {
    8: [3.74648, 0.553],
    16: [3.39835, 0.348],
    32: [3.2755, 0.179],
    64: [3.27142, 0.028],
    103: [3.90012, 0.69],
    128: [3.75423, 0.166],
  },
  '65536': {
    8: [7.51107, 0.337],
    16: [7.55696, 0.754],
    32: [7.03504, 0.22],
    64: [7.90807, 0.781],
    103: [7.79877, 0.241],
    128: [8.76945, 0.876],
  },
  '131072': {
    8: [16.16477, 0.721],
    16: [16.06023, 0.965],
    32: [15.69927, 0.737],
    64: [15.97352, 0.692],
    103: [16.95677, 1.224],
    128: [17.96394, 0.932],
  },
  '262144': {
    8: [35.52129, 0.964],
    16: [35.04482, 1.049],
    32: [36.01758, 1.597],
    64: [35.97038, 2.03],
    103: [38.55008, 1.843],
    128: [39.34987, 1.746],
  },
  '524288': {
    8: [83.1102, 6.85],
    16: [77.48053, 1.207],
    32: [78.77905, 2.026],
    64: [81.72689, 5.186],
    103: [83.04159, 2.035],
    128: [86.63025, 1.981],
  },
  '1048576': {
    8: [183.3367, 6.331],
    16: [175.32416, 4.16],
    32: [177.64931, 6.577],
    64: [178.70573, 5.223],
    103: [187.48241, 4.298],
    128: [197.29036, 6.664],
  },
  '2097152': {
    8: [438.64281, 40.367],
    16: [393.66856, 21.647],
    32: [385.3606, 12.416],
    64: [396.01248, 14.41],
    103: [406.74463, 13.076],
    128: [431.32562, 28.955],
  },
  '4194304': {
    8: [867.42294, 52.758],
    16: [845.49759, 70.074],
    32: [807.30063, 47.046],
    64: [823.24816, 40.352],
    103: [865.19406, 43.611],
    128: [871.67741, 29.899],
  },
  '8388608': {
    8: [1821.95224, 103.487],
    16: [1749.13619, 86.628],
    32: [1649.98741, 67.998],
    64: [1689.00011, 42.832],
    103: [1791.85266, 74.767],
    128: [1796.19355, 65.873],
  },
  '16777216': {
    8: [3673.1122, 197.637],
    16: [3583.8413, 173.571],
    32: [3507.06155, 148.087],
    64: [3583.12829, 153.401],
    103: [3681.88872, 158.218],
    128: [3857.04751, 226.397],
  },
  '33554432': {
    8: [8613.05594, 665.06],
    16: [8392.48394, 335.648],
    32: [8535.64147, 656.785],
    64: [8310.84472, 255.383],
    103: [8525.27445, 540.34],
    128: [8826.66422, 489.097],
  },
};
