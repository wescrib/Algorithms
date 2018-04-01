import java.util.Arrays;

public class Sorts{

    public int insertSort(int[] arr){
        int temp;
        for(int i=1;i<arr.length; i++){
        	int pointer = arr[i];
            int j = i-1;
            if(arr[i]<arr[j]){
            while(j>=0 && pointer<arr[j]){
        		temp = arr[j];
        		arr[j]=arr[j+1];
        		arr[j+1] = temp;
            	j--;
                };
            };
        }


        System.out.println(Arrays.toString(arr));
        return 0;
    }
}