# Sorting Algorithm Experiment

The goal is to examine the runtime of a few common sorting algothrims with n elements.

## Getting Started

You must have Node.js

In the CL:

```
cd <directory you want to download to>

git clone https://github.com/avuong12/Sorting-Algo-Experiment.git

node sort.js

```

## What You Will See

The experiment examines the runtime of Merge Sort, Insertion Sort, Quicksort, and two slightly different Quicksort with Insertion Sort (QuicksortCombo and QuicksortCombo2) algorithms for sorting n elements where 2<sup>3</sup> `≤` n `≤` 2<sup>18</sup>.
The runtime of each algorithm in computing n elements is presented as the average runtime of 10 trials in milliseconds.

The Bubble Sort algorithm is included but not analyzed because of its inefficiency to sort larger n elements.

```
┌─────────┬───────────────┬───────────┬────────────────┬─────────────────┬───────────┐
│ (index) │ insertionSort │ quickSort │ quickSortCombo │ quickSortCombo2 │ mergeSort │
├─────────┼───────────────┼───────────┼────────────────┼─────────────────┼───────────┤
│    8    │    0.0081     │  0.0162   │     0.0046     │     0.0049      │  0.0212   │
│   16    │    0.0023     │  0.0126   │     0.0024     │     0.0024      │  0.0206   │
│   32    │     0.005     │  0.0265   │     0.0048     │     0.0053      │  0.1396   │
│   64    │    0.0152     │   0.137   │     0.0158     │     0.0159      │  0.0854   │
│   128   │    0.3751     │  0.1157   │     0.0128     │     0.0091      │  0.3207   │
│   256   │    0.0042     │  0.1981   │     0.0089     │     0.0097      │  0.2071   │
│   512   │    0.0124     │  0.0388   │     0.0114     │     0.0102      │  0.4482   │
│  1024   │    0.0451     │   0.059   │     0.0198     │     0.0215      │  0.4835   │
│  2048   │     0.168     │  0.1206   │     0.0428     │     0.0498      │  1.0269   │
│  4096   │    0.6685     │  0.2659   │     0.0967     │     0.1054      │  2.0471   │
│  8192   │    2.6818     │  0.5327   │     0.2652     │     0.2292      │  4.4331   │
│  16384  │    10.6086    │  1.1067   │     0.3773     │     0.4173      │   8.913   │
│  32768  │    43.4893    │  2.1697   │     0.8007     │     0.8811      │  18.2448  │
│  65536  │   171.7085    │  4.8686   │     1.7155     │     1.8993      │  36.962   │
│ 131072  │   686.9118    │  9.2684   │     3.7113     │      4.122      │  81.6228  │
│ 262144  │   2821.4443   │  20.2633  │     8.3187     │     8.6096      │ 170.6277  │
└─────────┴───────────────┴───────────┴────────────────┴─────────────────┴───────────┘
```

## Run Your Own Experiment

You can examine the runtimes for different ranges of n and take the average time of any number of trials.
