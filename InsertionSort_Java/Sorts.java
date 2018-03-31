import java.util.Arrays;

public class Sorts{

    public int insertSort(int[] arr){
        int temp;
        for(int i=0;i<arr.length; i++){
            System.out.println(arr[i]);
            for(int j=i; j>0; j--){
                if(arr[i]<arr[j]){
                    temp = arr[j];
                    arr[j]=arr[i];
                    arr[i]=temp;
                };
            };
        }


        System.out.println(Arrays.toString(arr));
        return 0;
    }
}