for item in `ls`:
do
    echo $item
    cd $item
    yarn
    cd..
done