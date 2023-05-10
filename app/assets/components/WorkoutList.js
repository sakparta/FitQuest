
    export const strengthProgram = [
      {
        id: 1,
        title: 'Push Day:',
        content: 'Barbell Bench Press: 3 sets of 8-10 \n' +
                 'Dumbbell Shoulder Press: 3 sets of 8-10 \n' +
                 'Cable Flyes: 3 sets of 10-12 \n' +
                 'Tricep Pushdowns: 3 sets of 12-15 \n' +
                 'Overhead Tricep Extensions: 3 sets of 12-15 \n' +
                 'Lateral Raises: 3 sets of 12-15'
      },
      {
        id: 2,
        title: 'Pull Day:',
        content: 'Deadlifts: 3 sets of 8-10 \n' +
                 'Bent Over Rows: 3 sets of 8-10 \n' +
                 'Lat Pulldowns: 3 sets of 10-12 \n' +
                 'Bicep Curls: 3 sets of 12-15 \n' +
                 'Hammer Curls: 3 sets of 12-15 \n' +
                 'Face Pulls: 3 sets of 12-15'
      },
      {
        id: 3,
        title: 'Leg Day:',
        content: 'Squats: 3 sets of 8-10 \n' +
                 'Leg Press: 3 sets of 10-12 \n' +
                 'Romanian Deadlifts: 3 sets of 8-10 \n' +
                 'Leg Curls: 3 sets of 12-15 \n' +
                 'Calf Raises: 3 sets of 12-15 \n' +
                 'Lunges: 3 sets of 10-12'
      }
    ];

    export const cardioProgram = [
      {
        id: 1,
        title: 'Day 1: HIIT',
        content: 'Warm-up: 5 minutes of brisk walking or jogging \n' +
                 'Interval 1: 30 seconds of sprinting, 30 seconds of rest (repeat 10 times) \n' +
                 'Interval 2: 1 minute of walking, 1 minute of jogging (repeat 5 times) \n' +
                 'Cool-down: 5 minutes of slow walking'
      },
      {
        id: 2,
        title: 'Day 2: Steady State',
        content: 'Warm-up: 5 minutes of brisk walking or jogging \n' +
                 '30-45 minutes of steady state cardio (such as jogging, cycling, or swimming) at a moderate intensity \n' +
                 'Cool-down: 5 minutes of slow walking'
      },
      {
        id: 3,
        title: 'Day 3: Fartlek',
        content: 'Warm-up: 5 minutes of brisk walking or jogging \n' +
                 'Alternate between 1-2 minutes of high intensity effort and 1-2 minutes of low intensity effort for 30-40 minutes \n' +
                 'Cool-down: 5 minutes of slow walking'
      }
    ];

    export const mixedProgram = [
      {
        id: 1,
        title: 'Upper Body Day:',
        content: 'Barbell Bench Press: 3 sets of 8-10 \n' +
                 'Pull-Ups: 3 sets of 10-12 \n' +
                 'Military Press: 3 sets of 8-10 \n' +
                 'Dumbbell Rows: 3 sets of 10-12 \n' +
                 'Bicep Curls: 3 sets of 12-15 \n' +
                 'Tricep Pushdowns: 3 sets of 12-15'
      },
      {
        id: 2,
        title: 'Lower Body Day:',
        content: 'Squats: 3 sets of 8-10 \n' +
                 'Deadlifts: 3 sets of 8-10 \n' +
                 'Lunges: 3 sets of 10-12 \n' +
                 'Leg Press: 3 sets of 10-12 \n' +
                 'Leg Curls: 3 sets of 12-15 \n' +
                 'Calf Raises: 3 sets of 12-15'
      },
      {
        id: 3,
        title: 'Full Body Day:',
        content: 'Squats: 3 sets of 8-10 \n' +
                 'Bench Press: 3 sets of 8-10 \n' +
                 'Deadlifts: 3 sets of 8-10 \n' +
                 'Pull-Ups: 3 sets of 10-12 \n' +
                 'Military Press: 3 sets of 8-10 \n' +
                 'Leg Press: 3 sets of 10-12'
      }
    ];
    
    export const stretchingProgram = [
      {
        id: 1,
        title: 'Upper Body Stretching:',
        content: 'Shoulder Rolls: 3 sets of 10-15 seconds \n' +
                 'Tricep Stretch: 3 sets of 10-15 seconds \n' +
                 'Arm Across Chest Stretch: 3 sets of 10-15 seconds \n' +
                 'Upper Back Stretch: 3 sets of 10-15 seconds \n' +
                 'Neck Stretch: 3 sets of 10-15 seconds \n' +
                 'Chest Stretch: 3 sets of 10-15 seconds'
      },
      {
        id: 2,
        title: 'Lower Body Stretching:',
        content: 'Quad Stretch: 3 sets of 10-15 seconds \n' +
                 'Hamstring Stretch: 3 sets of 10-15 seconds \n' +
                 'Calf Stretch: 3 sets of 10-15 seconds \n' +
                 'Hip Flexor Stretch: 3 sets of 10-15 seconds \n' +
                 'Groin Stretch: 3 sets of 10-15 seconds \n' +
                 'Glute Stretch: 3 sets of 10-15 seconds'
      },
      {
        id: 3,
        title: 'Full Body Stretching:',
        content: 'Downward Dog: 3 sets of 10-15 seconds \n' +
                 'Child’s Pose: 3 sets of 10-15 seconds \n' +
                 'Cat-Cow Stretch: 3 sets of 10-15'
      }
    ]

    export const workoutArray = [
      {
        title: 'Strength Training', 
        shortDesc: 'Push, Pull, Legs',
        desc: 'A Push, Pull, Legs Split is a common workout routine used to target different muscle groups on different days.',
        icon: '',
        content: strengthProgram ,
        id: 1
      },
      {
        title: 'Cardio Training',
        shortDesc: 'Running, Cycling, HIIT ',
        desc: 'Exercise routine focused on improving cardiovascular health and fitness through activities such as running, cycling, and HIIT.', 
        content: cardioProgram ,
        icon: '',
        id: 2
      },
      {
        title: 'Mixed Program',
        shortDesc: 'Strength Training + Cardio',
        desc: 'A mixed training program combining strength and cardio exercises for a well-rounded fitness routine.',
        content: mixedProgram ,
        icon: '',
        id: 3
      },
      {
        title: 'Stretching Exercises',
        shortDesc: 'Overall Body Mobility',
        desc: 'Stretching program focusing on improving overall body mobility and flexibility through a variety of stretching exercises.',
        content: stretchingProgram ,
        icon: '',
        id: 4
      },
    ];
  