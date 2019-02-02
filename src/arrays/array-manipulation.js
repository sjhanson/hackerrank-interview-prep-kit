module.exports = {

    /*
        This is a straightforward problem to solve
        brute force by simply running all the query
        commands sequentially on the array.  This runs 
        into performance problems so the performant solution
        is to just mark where the query bounds start and 
        end and then we can roll up all the query commands
        in a single for loop.

        To mark the commands, we simply iterate through 
        all of the queries marking the beginning index
        with the value of the command.  To tell us where
        to stop applying this command, we subtract the 
        value from the endingIndex + 1.  The final step 
        is to add all of the values with their preceding
        ones, so the negative value brings us back 
        down to where we started.

                     _______
              __    /       \___
            _/  \__/            \___

    */
    arrayManipulation(n, queries) {
        let max = 0;
        let arr = new Array(n).fill(0);

        for (let i = 0; i < queries.length; i++) {

            // Add query value to starting index of query
            arr[queries[i][0]-1] += queries[i][2];

            // We don't need to add a marker past the end of array
            // so check to make sure it's in bounds first
            if (queries[i][1] < arr.length) {

                // Add negative query value at ending index +1 
                // of query.  This marks the spot to decrease value
                // back down to where it was previously.
                arr[queries[i][1]] -= queries[i][2];
            }
        }

        for (let j = 1; j < n; j++) {

            // Add array values with their preceding values
            arr[j] += arr[j-1];
        }

        for (let k = 0; k < arr.length; k++) {
            max = Math.max(max, arr[k]);
        }

        return max;
    }
}