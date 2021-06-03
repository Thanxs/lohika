import {
  animate,
  group,
  query,
  style,
  transition,
  trigger
} from '@angular/animations';

export const slider = trigger('routeAnimations', [
  transition('* => isLeft', slideTo('left')),
  transition('* => isRight', slideTo('right')),
  transition('isRight => *', slideTo('left')),
  transition('isLeft => *', slideTo('right'))
]);

function slideTo(direction) {
  const optional = { optional: true };
  return [
    query(
      ':enter, :leave',
      [
        style({
          position: 'fixed',
          top: 0,
          [direction]: 0,
          width: '100%',
          height: '100%'
        })
      ],
      optional
    ),
    query(':enter', [
      style({
        position: 'fixed',
        [direction]: '-100%',
        width: '100%',
        height: '100%'
      })
    ]),
    group([
      query(
        ':leave',
        [
          animate(
            '200ms ease-in-out',
            style({
              position: 'fixed',
              [direction]: '100%',
              width: '100%',
              height: '100%'
            })
          )
        ],
        optional
      ),
      query(':enter', [
        animate(
          '200ms ease-in-out',
          style({
            position: 'fixed',
            [direction]: '0%',
            width: '100%',
            height: '100%'
          })
        )
      ])
    ])
  ];
}
