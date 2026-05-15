package core

type PhantomjscloudError struct {
	IsPhantomjscloudError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewPhantomjscloudError(code string, msg string, ctx *Context) *PhantomjscloudError {
	return &PhantomjscloudError{
		IsPhantomjscloudError: true,
		Sdk:              "Phantomjscloud",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *PhantomjscloudError) Error() string {
	return e.Msg
}
