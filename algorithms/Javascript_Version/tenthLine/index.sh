# solution 1
tail -n 1 file.txt 

# echo

# solution 2
sed -n 10p file.txt

# solution 3
awk 'FNR == 10 {print }' file.txt
awk 'NR == 10' file.txt

# solution 4
cnt=0
while read line && [ $cnt -le 10 ]; do
    let 'cnt = cnt + 1'
    if [ $cnt -eq 10 ]; then
        echo $line
        exit 0
    fi
done < file.txt