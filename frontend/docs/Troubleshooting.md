# Troubleshooting

- [초기 세팅 작업시 발생한 이슈](#초기-세팅-작업시-발생한-이슈) 

## 초기 세팅 작업시 발생한 이슈

```
Failed prop type: Invalid prop 'component' supplied to 'Route': the prop is not a valid React component
```
원인 : 참조하려는 컴포넌트에서 export 부분이 형성되지 않아 발생
해결 방법 : export default Component 작성
