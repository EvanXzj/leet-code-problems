#!/bin/bash

tr " " "\n" < words.txt | sed '/^$/d' | sort | uniq -c | sort -nr| awk -F " " '{print $NF " " $1}'