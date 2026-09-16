window.PAPER_DATA_UPDATED_AT = "2026-09-16";
window.PAPER_ITEMS = [
  {
    "id": "2609.17527",
    "title": "Agentic Societies Need a Social Harness",
    "authors": [
      "Tapan Chugh",
      "Vidushi Singh",
      "Krish Jain",
      "Arvind Krishnamurthy",
      "Ratul Mahajan"
    ],
    "abstract": "An agentic society is a collection of AI agents that coordinate autonomously across trust boundaries, on behalf of different principals whose objectives may only partially align. We show experimentally that in agentic societies even honest, competent agents often fail to reach satisfactory outcomes with existing harnesses and messaging primitives, and that faulty or malicious agents can stall collaboration, influence outcomes, and pursue other harmful goals by exploiting vulnerabilities in communication (``speech''). We argue that agentic societies need a \\emph{social harness} for inter-agent interactions, in addition to each agent's \\emph{personal harness}, which manages its private context and communication with its principal. We propose a layered architecture for social harnesses which (i) prevents classes of failures outright, (ii) enables agents to detect invalid messages at runtime, and (iii) supports post-facto investigation and consequences, and highlight directions for future research to realize these capabilities.",
    "published": "2026-09-15T17:57:27Z",
    "updated": "2026-09-15T17:57:27Z",
    "categories": [
      "cs.MA",
      "cs.AI",
      "cs.NI"
    ],
    "url": "https://arxiv.org/abs/2609.17527"
  },
  {
    "id": "2609.17523",
    "title": "ScienceBuddy: Recursive-in-Recursive Self-Improvement for Interactive Scientific Agents",
    "authors": [
      "Shuhan Xue",
      "Jianyuan Zhong",
      "Ziyuan Nan",
      "Wenbin Li",
      "Zhaochen Yu",
      "Jinchao Ding",
      "Qiang Gao",
      "Pengyu Zhan",
      "Yuntong Zhang",
      "Tian Cheng",
      "Zhenfei Yin",
      "Yingcheng Wu",
      "Ling Yang"
    ],
    "abstract": "We introduce and release ScienceBuddy, an interactive scientific research workspace that brings continually improving scientific agents into researchers' everyday workflows. ScienceBuddy supports researchers in carrying out scientific tasks while transforming their requests, feedback, and execution evidence into tasks and evaluation rubrics for continual learning. At its core is recursive-in-recursive self-improvement, a paradigm that couples harness evolution with model reinforcement learning: the inner recursion improves the harness with the model fixed, while the outer recursion trains the model under the improved harness. Harness evolution shapes training experience, and model learning creates new opportunities for harness adaptation. We present case studies of researcher interaction, harness refinement, and model learning, with the benchmark cases spanning four scientific task families. By releasing ScienceBuddy as a research product, we make this paradigm available to the scientific community and take a step toward discovery intelligence: scientific AI that advances through sustained collaboration with researchers and evolves alongside the research it supports. Website: http://science-buddy.io",
    "published": "2026-09-15T17:55:28Z",
    "updated": "2026-09-15T17:55:28Z",
    "categories": [
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2609.17523"
  },
  {
    "id": "2609.17521",
    "title": "PhysStream: Streaming Physics-Grounded Video Generation with Structured Scene Memory and Fine-Grained Motion Control",
    "authors": [
      "Chuhao Chen",
      "Peter Wonka",
      "Chaoyang Wang",
      "Chen Wang",
      "Qiao Feng",
      "Sergey Tulyakov",
      "Lingjie Liu"
    ],
    "abstract": "Interactive control for video generation is moving from coarse prompts toward fine-grained, physically meaningful manipulation of dynamic scenes. Yet existing controllable methods either require the full control schedule before generation starts, or use pixel-space signals that dictate object positions rather than physical dynamics. To address these limitations, we propose PhysStream, an autoregressive model for physics-grounded image-to-video synthesis that incorporates structured scene memory---positional maps and object tracking maps derived online from previously generated frames---and supports fine-grained motion control via sparse velocity-increment signals that encode physical quantities, letting the model learn the underlying dynamics. We train our model in two stages: a bidirectional model is first finetuned with motion-control conditioning, then a causal autoregressive model is trained with additional structured scene memory, further improving physical consistency. PhysStream enables interactive, mid-generation control over multi-object tabletop rigid-body scenes---a capability not supported by prior methods---reducing motion distribution distance (FVMD) by 33% and trajectory error by 12% over the strongest baselines on synthetic benchmarks, and is preferred by human evaluators in over 85% of in-the-wild comparisons. Please check our website for more details: https://czzzzh.github.io/PhysStream",
    "published": "2026-09-15T17:55:13Z",
    "updated": "2026-09-15T17:55:13Z",
    "categories": [
      "cs.CV",
      "cs.AI",
      "cs.GR"
    ],
    "url": "https://arxiv.org/abs/2609.17521"
  },
  {
    "id": "2609.17516",
    "title": "When Should LLMs Abstain? Chain-of-Self-Questioning for Selective Risk Control",
    "authors": [
      "Ali Şenol"
    ],
    "abstract": "Large language models can produce fluent answers when their factual support is weak. This paper introduces Chain-of-Self-Questioning (CoSQ), a prompt-only framework that makes answer commitment conditional on an explicit assessment of the information required to answer a question. We evaluate three CoSQ variants under seventeen conditions on the 817-item TruthfulQA multiple-choice validation set using eleven open-weight and hosted model families. In the final balanced-option protocol, Grounded-CoSQ at τ=0.90 reduces the mean unconditional wrong-commitment rate from 13.1% under chain-of-thought prompting to 8.9%, a 32.1% relative reduction, while increasing answered accuracy from 86.9% to 89.7% and answering 87.6% of questions. Both improvements hold for all eleven models and at every evaluated threshold. Critical-CoSQ and Adaptive-CoSQ provide neighboring operating points with 88.6% and 86.5% coverage, respectively, while remaining more reliable than the baseline. A secondary Natural Questions Short-Answer evaluation provides convergent open-form evidence. These findings show that self-assessment can support explicit, tunable answer-or-abstain decisions when an unsupported commitment is more costly than referral or review.",
    "published": "2026-09-15T17:52:24Z",
    "updated": "2026-09-15T17:52:24Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.17516"
  },
  {
    "id": "2609.17509",
    "title": "LACE: Layer-Wise Compression for Dynamic Frame Rate Codecs",
    "authors": [
      "Thanapat Trachu",
      "Samuele Cornell",
      "William Chen",
      "Shinji Watanabe"
    ],
    "abstract": "Neural audio codecs are a key component in speech language modeling. However, their high frame rates lead to long sequence lengths, increasing computational costs. Dynamic frame rate codecs mitigate this by reducing the effective frame rate using a compression step to merge multiple frames together. However, most prior methods either operate on single-codebook codecs or apply a single compression step before multi-layer quantization. This forces all quantization layers to share the same segmentation boundaries, despite the residual embeddings at different quantization layers exhibiting different rates of change over time. We propose LACE (Layer-Adaptive Codec Encoding), a dynamic frame rate codec that applies an independent compression step at each quantization layer, enabling layer-specific segmentation boundaries. To use LACE tokens in downstream text-to-speech (TTS), we further introduce union alignment and boundary anchor mechanisms to make durations consistent across layers while preserving compression benefits. Experiments on LibriTTS show that LACE offers a better rate-quality tradeoff than prior dynamic frame rate methods on the reconstruction task and improves TTS inference efficiency while maintaining competitive synthesis quality. Our code is released as part of the ESPnet3 codec recipe.",
    "published": "2026-09-15T17:46:51Z",
    "updated": "2026-09-15T17:46:51Z",
    "categories": [
      "cs.SD",
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2609.17509"
  },
  {
    "id": "2609.17499",
    "title": "ENCP: Episode-Normalized Conformal Prediction for Vision-and-Language Navigation",
    "authors": [
      "Vicky Feliren",
      "A. Taufiq Asyhari",
      "Muhamad Risqi U. Saputra"
    ],
    "abstract": "Uncertainty estimation for Vision-Language-Navigation (VLN) models is a critical task since it can help identify ambiguous and unreliable predictions, enabling agents to make safer navigation decisions. As one of the most advanced uncertainty estimation frameworks, conformal prediction (CP) offers a promising approach for uncertainty estimation in VLN. However, given that VLN agent requires a sequence of steps, standard calibration in conformal prediction fails to provide coverage guarantee it promises over a dependent, variable-length VLN episode. To this end, we propose Episode-Normalized Conformal Prediction (ENCP), which rescales a nonconformity score by the policy's residual confidence and calibrates one maximum score per episode. Under exchangeable calibration and test episodes, this construction covers the ground truth at every step with probability at least $1 - α$, while allowing dependence among steps within an episode. Across four VLN policies and three nonconformity scores on R2R and REVERIE dataset, ENCP meets all reported empirical step-coverage targets on the seen-to-unseen evaluation. These results demonstrate that ENCP can provide model-agnostic uncertainty estimates, which might be useful for determining when a VLN agent should defer to a more capable predictor, including human assistance.",
    "published": "2026-09-15T17:42:15Z",
    "updated": "2026-09-15T17:42:15Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "cs.RO"
    ],
    "url": "https://arxiv.org/abs/2609.17499"
  },
  {
    "id": "2609.17496",
    "title": "Verifiable Social Reasoning for LLM Assistants",
    "authors": [
      "Amir Taubenfeld",
      "Zorik Gekhman",
      "Avigail Grinstein-Dabush",
      "Itay Laish",
      "Ariel Goldstein",
      "Marian Croak",
      "Avinatan Hassidim",
      "Yossi Matias",
      "Amir Feder"
    ],
    "abstract": "LLM assistants are widely used for daily social advice, yet evaluating their social reasoning in such consultation settings remains challenging since (i) it requires setups where the assistant learns about social situations from subjective user narratives, and (ii) social properties, such as others' intentions, typically lack verifiable ground truth. To address these challenges, we introduce Fuse, a multi-agent simulation framework for studying user-mediated social reasoning. In Fuse, a target agent with a hidden motive interacts with other agents including one representing the user, who then consults the evaluated assistant to infer the target's motive, providing verifiable ground truth by construction. Simulation faithfulness is validated through a human study with 24k annotations. We apply Fuse to 12 LLMs and demonstrate its analytical utility by systematically isolating key factors, showing that (i) user mediation compounds the inherent difficulty of social reasoning; (ii) LLMs exhibit systematic sensitivity to biased user framing; (iii) models can require more details than humans need to reach a correct prediction; and (iv) longer conversations do not always improve performance despite providing opportunities for clarifying questions. We open-source Fuse and a dataset with 21k examples.",
    "published": "2026-09-15T17:37:29Z",
    "updated": "2026-09-15T17:37:29Z",
    "categories": [
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2609.17496"
  },
  {
    "id": "2609.17488",
    "title": "LimiX-2: A Contextual Mechanism Network Towards General Structured-Data Intelligence",
    "authors": [
      "Xingxuan Zhang",
      "Gang Ren",
      "Hao Yuan",
      "Hao Zou",
      "Hongze Tan",
      "Hui Wang",
      "Jianhao Song",
      "Jiansheng Li",
      "Jiayao Zhang",
      "Jinghan Zhang",
      "Kaifang Li",
      "Lang Mo",
      "Li Mao",
      "Mingchao Hao",
      "Nuo Xu",
      "Rui Ding",
      "Ruiji Zhang",
      "Shuyang Li",
      "Siyu Mei",
      "Tianyang Zhang",
      "Weiyang Mu",
      "Yancheng Dong",
      "Yongxian Wei",
      "Yuan Xue",
      "Yuanrui Wang",
      "Yue He",
      "Zijia Yang",
      "Ziyun Li",
      "Dongzhe Li",
      "Fuqiang Wang",
      "Jiandong Liu",
      "Jiawei Chen",
      "Jiaxin Du",
      "Kaijie Cheng",
      "Kehan Li",
      "Lei Sun",
      "Linjun Zhou",
      "Ningbo Dai",
      "Qi Wang",
      "Renzhe Xu",
      "Shaoxing Du",
      "Shumeng Yang",
      "Wang Lu",
      "Wenjing Chu",
      "Xiannan Huang",
      "Xiaoyu Lin",
      "Xing Ai",
      "Xinyan Han",
      "Xuanyue Li",
      "Xuanyue Su",
      "Xukun Zhang",
      "Yan Lu",
      "Yaxin Zhang",
      "Yi Qin",
      "Yifei Huang",
      "Yihan Xu",
      "Yongle Lv",
      "Yuanyuan Jiang",
      "Yushan Han",
      "Peng Cui"
    ],
    "abstract": "We introduce LimiX-2, a new model in the LimiX family, developed through model and data scaling guided by our previously established scaling laws. LimiX-2 adopts the Contextual Mechanism Networks (CMNs) paradigm and is pretrained with Context-Conditional Masked Modeling (CCMM). CMNs shifts the organizing principle of in-context learning from target-centric prediction to mechanism-oriented joint modeling. Rather than centering the network on the $p(y \\mid x, D_{\\mathrm{context}})$ objective of conventional tabular PFNs, it is designed around learning $p(x, y \\mid D_{\\mathrm{context}})$, a context-dependent representation of the joint structure underlying data generation. Pretraining uses synthetic datasets generated by structural causal models (SCMs) spanning diverse graph structures, functional mechanisms, and observation processes. Evaluations on TabArena, TALENT, and BCCO show that LimiX-2 outperforms current dataset-specific models and tabular foundation models. Beyond predictive performance, the CMN paradigm also promotes causal awareness in LimiX-2: its feature attention encodes direct causal relationships, enabling accurate causal skeleton recovery.",
    "published": "2026-09-15T17:30:02Z",
    "updated": "2026-09-15T17:30:02Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.17488"
  },
  {
    "id": "2609.17485",
    "title": "Quick-View Takeaways: How Does Title Framing Influences Pattern Identification in Line Charts?",
    "authors": [
      "Jasmine Lim",
      "Tapendra Pandey",
      "Arran Zeyu Wang",
      "Ghulam Jilani Quadri"
    ],
    "abstract": "Visual data communication in digital media is increasingly characterized by short attention spans and snapshot-based viewing, often employing line charts to convey trends and patterns. Among all visual elements, titles are crucial ones that can shape how viewers interpret visual information and form chart takeaways. In this study, we examine how title characteristics, particularly title word count and intended message, influence people's pattern identification in single-class line charts. Participants viewed 50 line charts collected from online news media and identified the pattern they perceived. Our results demonstrate that both title word count and intended message significantly influence viewers' pattern identification. Our findings highlight the importance of title design in shaping chart takeaways and effective visualization communication.",
    "published": "2026-09-15T17:26:12Z",
    "updated": "2026-09-15T17:26:12Z",
    "categories": [
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2609.17485"
  },
  {
    "id": "2609.17479",
    "title": "Det-LIME: Detector-Aware, Multi-Instance Local Interpretable Model-Agnostic Explanations for Automated Marine Mammal Detection",
    "authors": [
      "Jiayi Zhou",
      "David W. Johnston",
      "Brinnae Bent"
    ],
    "abstract": "Despite the rapid uptake of black-box object detectors in marine mammal research and monitoring, explainability techniques are rarely integrated into conservation workflows. Furthermore, most classification-oriented explainability tools are ill-suited to detection tasks involving imagery of social organisms or those with colonial life histories, as they ignore multiple detections within a scene and produce single-instance outputs that blur evidence across individuals. These methods also generate low-resolution, often biologically irrelevant visuals, limiting their utility for debugging, targeted data augmentation, and refined data collection. We proposed Det-LIME, a detector-aware, multi-instance adaptation of Local Interpretable Model-Agnostic Explanations (LIME) that produced instance-specific, box-aligned explanations by combining per-detection weighting, a proximity kernel that emphasizes regions near each box, and Intersection-over-Union-based matching to track the same instance across perturbations. We evaluated Det-LIME on aerial drone imagery for harbor seal detection, with an additional seabird case study to assess generality, and compared it with vanilla LIME, Stabilized LIME, Deterministic LIME, and gradient-based attribution methods. Using the Attribution Ratio and Max Saliency Hit Rate metrics, we showed that Det-LIME consistently improved multi-instance attribution. In practice, these higher-resolution, instance-aware explanations provide insight into model outputs and support post-processing, debugging, and actionable improvements in modeling and data collection or augmentation.",
    "published": "2026-09-15T17:20:16Z",
    "updated": "2026-09-15T17:20:16Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.17479"
  },
  {
    "id": "2609.17475",
    "title": "JustFit: 200K-Token LLM Serving on a 24 GiB Laptop with Just-in-Time State Management",
    "authors": [
      "Yuhua Chen"
    ],
    "abstract": "Capable open-weight models make local coding and reasoning attractive, but their context and execution state strain laptop memory. We present JustFit, an MLX-based inference runtime that combines KVExec for compressed KV execution, PhaseSwap for component residency, and StateTrans for state-preserving serving transitions. These mechanisms fuse reconstruction and coordinate just-in-time materialization and release, independently of model-weight quantization. In full-execution capacity tests on a 24 GiB M4 Pro MacBook running Qwen3.8-27B MXFP4, three independent runs complete 196,608 input and 16,384 output tokens, increasing completed single-request context from the mlx-vlm baseline's 30,720 positions to 212,992 (6.93x); a separate two-request run retains 229,376 positions in aggregate. In separate performance tests, a 32K-input, 64-output probe reaches 19.11 tokens/s, and a repeated 32K+6K workload has a median peak process footprint of 16,374 MiB. The integrated runtime answers 29 of 30 AIME 2026 problems correctly, showing how compact state and lifetime-aware execution expand local serving capacity while supporting extended generated reasoning.",
    "published": "2026-09-15T17:15:48Z",
    "updated": "2026-09-15T17:15:48Z",
    "categories": [
      "cs.AI",
      "cs.PF"
    ],
    "url": "https://arxiv.org/abs/2609.17475"
  },
  {
    "id": "2609.17474",
    "title": "Coupled Calibration and Learning: Mitigating Teacher Bias in LLM Distillation without Target-Domain Reward Feedback",
    "authors": [
      "Haichen Hu",
      "Yuheng Zhang",
      "David Simchi-Levi"
    ],
    "abstract": "Large language model (LLM) distillation aims to transfer the capabilities of a powerful teacher to a smaller student. Direct imitation, however, can also transfer the teacher's systematic bias and errors. This challenge is particularly pronounced under covariate shift, when the teacher's reliability on target questions is uncertain and target-domain reward feedback is unavailable. We propose Coupled Calibration and Learning (CCL), an LLM distillation algorithm that couples teacher calibration with student updates through token-level branching, using reward feedback only on source questions. Each iteration calibrates the teacher using source feedback and then uses the calibrated teacher to train the student on target questions. The updated student, in turn, informs subsequent calibration. In an autoregressive policy framework, we prove that the output student's expected average Kullback-Leibler divergence to the oracle student converges to zero at a polynomial rate in the number of iterations. The oracle maximizes the true reference-regularized target reward within the student class, which need not represent the unrestricted optimal policy. Our analysis quantifies the progress of projected student gradient updates while controlling the error in teacher calibration. We further establish a separation from regularized direct matching: its error relative to the oracle student can remain bounded away from zero even when the teacher achieves higher regularized target reward than every student policy. These results demonstrate that LLM distillation can overcome persistent teacher bias and recover the optimal student through coupled calibration and learning, without target-domain reward feedback.",
    "published": "2026-09-15T17:15:40Z",
    "updated": "2026-09-15T17:15:40Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "math.ST",
      "stat.ML"
    ],
    "url": "https://arxiv.org/abs/2609.17474"
  },
  {
    "id": "2609.17355",
    "title": "Evaluating Ambient Clinical Scribes in India: The Need for Multilingual Real-World Clinical Conversation Data",
    "authors": [
      "Siddharth D Jaiswal",
      "Krithi S",
      "Ashish Makani",
      "Suvrankar Datta",
      "Sunayana Sitaram",
      "Mohit Jain"
    ],
    "abstract": "Ambient clinical scribes (ACS) are being rapidly deployed at scale across Global South healthcare settings, aiming to reduce clinician documentation time, especially in overburdened environments like India. These ACS are primarily developed or distilled from models built and validated on Global North speech, languages and consultation styles. Indian clinical encounters are brief, triadic, multilingual, code-mixed with low-resource languages, and conducted in highly resource-constrained, noisy settings -- increasing the likelihood of ASR and note-generation errors manyfold. We posit an urgent need to develop a standardized evaluation infrastructure to assess whether these systems are safe, reliable, and well-suited to the Indian healthcare setting. We substantiate our claims through a mixed-methods study -- a systematic survey of publicly available patient-clinician conversational datasets, a quantitative comparison of these datasets against conversational and cultural markers drawn from the Indian clinical-communication literature, and semi-structured interviews with five organizations building and deploying ACS in India and Africa. Our survey shows that there are no publicly available, large-scale, real-world benchmarks for ACS in India, with existing datasets being overwhelmingly synthetic. We note that the available Global North datasets diverge significantly from the expected conversational and cultural structures of Indian encounters. Finally, our interviews reveal that deploying organizations have each built proprietary, incomparable evaluation pipelines, creating a fragmented ecosystem with no independent and reliable basis for procurement. We call for the development of a publicly shared, real-world, multilingual benchmark for ACS evaluation and outline the properties and policies such a benchmark would require.",
    "published": "2026-09-15T15:52:15Z",
    "updated": "2026-09-15T15:52:15Z",
    "categories": [
      "cs.CY",
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2609.17355"
  },
  {
    "id": "2609.17346",
    "title": "Where Should a Document Live: Context, Representations, or Parameters?",
    "authors": [
      "Nathanaël Carraz Rakotonirina",
      "Momchil Hardalov",
      "Gonzalo Iglesias",
      "Adrià de Gispert"
    ],
    "abstract": "To answer questions outside of their pre-training data, large language models (LLMs) need access to new information, which can be presented in the context window as documents, encoded into the model's parameters, or injected as latent representations. However, each of these methods comes with different efficiency, cost, and performance trade-offs, with no single winner. We present a controlled comparison of representation-based (KV-cache based) and parametric (fine-tuning-based) adaptation methods on five knowledge-intensive benchmarks. We show that in the oracle setting, Cartridges (KV) are the most accurate injection method at nearly every storage budget, outperforming parametric methods by 10 points. Compaction (KV) matches Cartridges only at low compression rates, lagging behind the parametric methods by 10 points at rates higher than $50\\times$. In the more realistic multi-document retrieval scenario, Cartridges are the only method that matches in-context learning (ICL), leading the parametric methods by 29 points and Compaction by 15 points. Nonetheless, Cartridges are also the only method, besides full fine-tuning and large MLP adapters, that suffers from catastrophic forgetting, i.e., a 6% performance degradation on control benchmarks, with 13% in coding.",
    "published": "2026-09-15T15:47:02Z",
    "updated": "2026-09-15T15:47:02Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.17346"
  },
  {
    "id": "2609.17335",
    "title": "LumiNote: LLM-Assisted Multimodal Instruction for VR Stage Lighting Education",
    "authors": [
      "Danxuan Liang",
      "Chun Yin Li",
      "Zheng Wei",
      "Xian Xu",
      "Meng Xia",
      "Huamin Qu",
      "Wai Tong"
    ],
    "abstract": "Stage lighting education requires instructors to bridge abstract concepts, technical operations, and learner-understandable representations. While Virtual Reality (VR) removes physical constraints, existing systems provide limited support for live instruction. We present LumiNote, an LLM-assisted VR system that transforms spoken pedagogical intent into instructor-reviewable spatial annotations, executable demonstrations, and linguistic support. In an exploratory study with 3 instructors and 24 students, we examined how instructors incorporated LumiNote into familiar lighting topics and how students received the resulting representations. We found LLM assistance most valuable for expressive, under-specified goals, but requiring greater expert intervention for fixture-specific or spatial configuration requests. Instructors engaged with generated suggestions as a controllable refinement process, shifting effort from manual setup toward pedagogical expression. However, representations that externalized expert reasoning did not always align with novice comprehension. These findings characterize LLM-assisted VR instruction as a domain-grounded mediation process among expert expression, executable operations, and learner-facing representations.",
    "published": "2026-09-15T15:38:49Z",
    "updated": "2026-09-15T15:38:49Z",
    "categories": [
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2609.17335"
  },
  {
    "id": "2609.15855",
    "title": "K-Bench: a clinically calibrated benchmark for evaluating large language models in high-risk mental health conversations",
    "authors": [
      "Laura M. Vowels",
      "Matthew J. Vowels",
      "Shivali Sharma",
      "Apoorv Jha",
      "Rehnuma Choudhury",
      "Wasseem El Sarraj",
      "Rachel Francois-Walcott",
      "Aruba Hussain",
      "Sarah Ingram",
      "Angela Loulopoulou",
      "Adva Segal",
      "Elena Volkova"
    ],
    "abstract": "People increasingly use large language models (LLMs) for mental health support, yet their safety in evolving, high-risk conversations remains poorly characterised. We developed K-Bench, a clinician-calibrated, protected benchmark evaluating 125 model configurations representing 33 base models from 14 providers across a fixed cohort of 200 multi-turn vignettes involving suicide, self-harm, domestic violence, substance misuse, and no-risk presentations. Synthetic patient conversations showed substantial distributional overlap with real human-AI conversations. A frozen GPT-4o judge achieved 94.2% exact agreement with clinician consensus across 6,751 eligible item comparisons from 151 clinician-rated transcripts. Leading models combined strong supportive conversation with combined-risk scores above 95, whereas risk exploration exposed substantial variation among lower-performing configurations. Therapeutic prompting produced configuration-specific gains concentrated among weaker models, while elevated reasoning produced no average improvement. K-Bench combines broader clinical coverage and configuration-scale comparison with a continuously updated public leaderboard whose operational test materials are protected from direct optimisation. The leaderboard is available at www.k-bench.ai.",
    "published": "2026-09-14T16:49:23Z",
    "updated": "2026-09-15T07:30:50Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2609.15855"
  },
  {
    "id": "2609.15849",
    "title": "Before You Poll with LLMs: A Deliberative Diagnostic Framework",
    "authors": [
      "Ahmed Wali",
      "Hassaan Tayyab"
    ],
    "abstract": "Can LLMs reason through new information like humans, or do they merely retrieve cached opinions? This is critical for silicon sampling, where LLM personas simulate public opinion at scale. Current evaluations test only whether personas hold the right opinions -- a static snapshot. But opinion research increasingly depends on dynamic fidelity: whether personas update beliefs in response to new arguments, as humans do during deliberation. No existing benchmark tests this. We introduce the Deliberative Polling Diagnostic Framework, which compares human and LLM belief shifts after identical informational interventions. Grounded in deliberative polling, it surfaces failures invisible to static evaluation: models that produce plausible partisan opinions can still misrepresent how those opinions change. Applying the framework to five frontier models using data from America in One Room (526 personas, 72 questions), we find that every model fails, each in a unique manner. GPT-5.1 exhibits reversal: its personas become more hostile toward the opposing party after balanced information, while humans become less so. This reversal is selective (80% on outgroup vs. 26% on policy questions) and symmetric across partisan identities. Gemini 2.0 Flash, Claude Sonnet 4.5, and Llama 3.3 70B exhibit overshoot, shifting correctly but at 5-7x human magnitude. DeepSeek V3 exhibits rigidity with near-zero change. Targeted ablations reveal that policy content triggers these failures and that they are identity-specific: GPT-5.1 reverses on outgroup questions but overshoots on ingroup; Gemini shows the inverse. We term this signature self-sycophancy: conformity to the model's internal stereotype of the persona rather than reasoning from the information provided. Our framework offers a concrete protocol: run the deliberative diagnostic before trusting LLM personas to mimic revised beliefs.",
    "published": "2026-09-14T16:41:48Z",
    "updated": "2026-09-14T16:41:48Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.CY"
    ],
    "url": "https://arxiv.org/abs/2609.15849"
  },
  {
    "id": "2609.15847",
    "title": "Proportional-Fair Resource Allocation and Dual-Threshold Early-Exit Inference for Secure Cooperative Multi-Layer Edge Intelligence",
    "authors": [
      "Thai T. Vu",
      "John Le",
      "Tu N. Nguyen",
      "Jun Shen",
      "Quang Vinh Duong",
      "Ha Nguyen"
    ],
    "abstract": "This paper proposes FREDI (Fair Resource Allocation for Edge Dual-Threshold Inference), a secure wireless edge-intelligence framework for event-triggered inference in a cooperative user equipment (UE)--edge server (ES)--cloud system. Each UE performs early-exit convolutional neural network (CNN) screening using dual confidence thresholds, while critical events are securely offloaded to an edge server for detailed classification. We formulate a proportionally-fair utility maximization problem that jointly optimizes UE--ES association, wireless and processing resources, and confidence thresholds. FREDI decomposes the problem into proportional-fair resource allocation and dual-threshold inference optimization. We prove that the detected-critical event set is set-monotone non-increasing in both thresholds, and exploit the finite empirical confidence domain for exact threshold optimization. An empirical resource--utility response envelope yields a computable global suboptimality bound and a sufficient condition for global optimality. By pre-eliminating infeasible UE--ES pairs and exactly projecting out bandwidth and transmit-power variables, the resource-allocation subproblem is reduced to a mixed-integer exponential-cone program solvable to the certified global optimality within a prescribed gap. Numerical results with early-exit MobileNetV2 and ShuffleNetV2 demonstrate near-perfect UE fairness with aggregate utility close to a Sum-Utility benchmark, reveal security-induced resource fragmentation, and demonstrate the Stage-A scalability from 6 to 144 UEs with median solving time below 0.1~s in the tested configurations.",
    "published": "2026-09-14T16:41:15Z",
    "updated": "2026-09-14T16:41:15Z",
    "categories": [
      "cs.NI",
      "cs.CV",
      "cs.ET",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2609.15847"
  },
  {
    "id": "2609.15838",
    "title": "Per-Matrix Optimality Is Not Enough: Three-Level Optimization for Low-Rank LLM Compression",
    "authors": [
      "Huicheng Zhang",
      "Xiyao Feng",
      "Ze-Tong Li",
      "Chengkai Zhu",
      "Xiao Shi",
      "Xiwei Pan",
      "Jinguo Liu",
      "Ge Bai",
      "Xin Wang"
    ],
    "abstract": "Per-matrix singular value decomposition (SVD) truncation is Eckart-Young optimal in the whitened Frobenius norm, but errors from independently compressed matrices compound through the block's nonlinear forward pass. Inspired in part by hierarchical variational optimization in quantum many-body methods, we introduce a three-level chain that widens optimization scope from individual matrices to Transformer blocks to the full model: whitened SVD~(L1), block-level joint optimization~(L2), and end-to-end language-modeling loss refinement~(L3), all from 256 calibration sequences, with no instruction or recovery data. On LLaMA-7B at 60% compression, the chain reduces WikiText-2 perplexity from 42.1 to 19.1 to 11.4. The block-level stage acts as a regularizer: skipping it worsens Penn Treebank (PTB) perplexity by 24 points, a gap that additional end-to-end training did not close in our experiments. Perplexity gains hold across 20-80% compression, five architectures up to 13B parameters, and both in-distribution and out-of-distribution benchmarks, though the cross-architecture rows use architecture-specific configurations and the ratio sweep was not run under one common protocol. With more calibration data, skipping the block-level stage becomes competitive, revealing an offline compute--data trade-off. We therefore claim improvements only in perplexity and compression fidelity; downstream accuracy remains well below the dense model.",
    "published": "2026-09-14T16:36:46Z",
    "updated": "2026-09-14T16:36:46Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.15838"
  },
  {
    "id": "2609.15834",
    "title": "TRACE: Two-Stage Detector-Response Estimation With Angular Cosine Expansion for Ring Artifact Correction in Photon-Counting CT",
    "authors": [
      "Jigang Duan",
      "Heran Wang",
      "Ligen Shi",
      "Zheng Sun",
      "Ping Yang",
      "Xing Zhao"
    ],
    "abstract": "Detector response nonuniformity introduces systematic projection errors and ring artifacts in photon-counting detector computed tomography (PCD-CT). In measured PCD-CT data, residual stripe amplitudes vary slowly with projection angle, which fixed-bias models cannot adequately capture. We propose TRACE, a two-stage unsupervised sinogram decomposition method for estimating and correcting these response-related errors. TRACE represents stripes as a fixed bias plus low-order discrete cosine transform (DCT) components, using a small number of coefficients to describe angular variations at each detector element. A learnable analysis--synthesis architecture represents the ideal projections, while two-stage optimization separates them from fixed and then dynamic stripes. An angular-gradient soft orthogonality constraint suppresses correlated variations within the shared DCT gradient subspace, reducing the leakage of object structures into the artifact estimate. All parameters are optimized directly on the measured sinogram without paired training data. Experiments on measured QRM mouse phantom and porcine trotter data show that TRACE suppresses ring artifacts and improves image uniformity while preserving edge sharpness, soft-tissue texture, and trabecular detail.",
    "published": "2026-09-14T16:31:32Z",
    "updated": "2026-09-14T16:31:32Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.15834"
  },
  {
    "id": "2609.15833",
    "title": "Integrating Multi-view Multi-light Surface Reconstruction into Cultural Heritage Workflows",
    "authors": [
      "Baptiste Brument",
      "Robin Bruneau",
      "Benjamin Coupry",
      "Vincent Demoulin",
      "Jean Mélou",
      "Antoine Laurent",
      "Fabien Castan",
      "Jean-Denis Durou",
      "Lilian Calvet"
    ],
    "abstract": "Cultural heritage documentation increasingly relies on image-based 3D surface reconstruction, with photogrammetry software making such workflows accessible to archaeologists, conservators, and heritage technicians. These tools have been successful for conventional multi-view acquisition, but they do not routinely exploit richer multi-view, multi-light data, despite its potential for improving fine-scale surface reconstruction. This limitation is particularly relevant in heritage contexts, where controlled-light acquisition devices such as RTI domes are already used to capture illumination-varying image sets. The challenge is therefore to connect these existing acquisition practices with recent computer vision methods in a form that can be used within operational heritage workflows. In this work, we address this need by integrating state-of-the-art components from computer vision for multi-view, multi-light surface reconstruction into Meshroom, an open-source photogrammetry framework. Rather than proposing a new reconstruction algorithm, our contribution is to assemble and expose existing advanced methods, namely a complete photometric stereo ecosystem (calibrated, self-calibrated and universal), automatic object masking, and multi-view normal-and-reflectance integration, within a usable heritage-oriented workflow. The proposed system thus provides an intermediate software layer between computer vision research code and practical cultural heritage applications, making recent techniques easier to use and evaluate.",
    "published": "2026-09-14T16:31:18Z",
    "updated": "2026-09-14T16:31:18Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.15833"
  },
  {
    "id": "2609.15830",
    "title": "CiteGuard-RAG: A Validation-Centered AI System for Evidence-Grounded Question Answering",
    "authors": [
      "Sumit Barua",
      "Guan Hong",
      "Halil Dursunoglu",
      "Charles Rodgers",
      "Alvis Fong"
    ],
    "abstract": "Retrieval-augmented generation (RAG) can improve access to complex information; however, retrieving evidence alone does not ensure that answers are grounded, citation-valid, or appropriately refused. This paper introduces CiteGuard-RAG, a validation-centered AI system for evidence-grounded question answering. The system integrates hybrid semantic-lexical retrieval, citation-constrained generation, sentence-level grounding validation, and single-pass regeneration. Validation is used at runtime to determine whether a candidate answer should be accepted, refused, or regenerated before final delivery. CiteGuard-RAG is evaluated on 400 questions across a controlled housing-law dataset, PrivacyQA, and CUAD. In the controlled evaluation, it achieves 99.1% retrieval accuracy, 98.3% grounded-answer accuracy, and 98.3% citation validity, with no validation-detected hallucinations. Ablation results show that grounded-answer accuracy drops sharply when validation is removed, even when retrieval accuracy remains unchanged. External evaluation shows that while citation validity remains strong, evidence utilization, span alignment, and refusal calibration become harder under domain shift. These findings indicate that trustworthy RAG systems require explicit validation between retrieval and final answer delivery. CiteGuard-RAG provides a practical architecture for linking retrieval, generation, citation checking, abstention, and regeneration in high-stakes information access.",
    "published": "2026-09-14T16:30:54Z",
    "updated": "2026-09-14T16:30:54Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.IR"
    ],
    "url": "https://arxiv.org/abs/2609.15830"
  },
  {
    "id": "2609.15820",
    "title": "AlgoEvo: Self-Evolving Agentic Search for Automated Algorithm Discovery",
    "authors": [
      "Junhao Qiu",
      "Qinglong Hu",
      "Xialiang Tong",
      "Mingxuan Yuan",
      "Liyong Lin",
      "Qingfu Zhang"
    ],
    "abstract": "Large language models have advanced automated algorithm discovery by synthesizing executable code, but existing frameworks trap them in rigid search pipelines with pre-defined control flows. This limitation restricts adaptive reasoning, blocks cross-paradigm transfer, and discards valuable execution feedback. We propose AlgoEvo, a unified agentic framework that transforms automated algorithm discovery into an interactive, knowledge-accumulating process. An autonomous agent dynamically inspects, diagnoses, and edits code based on runtime feedback. A design skill hub decouples paradigm-specific knowledge from the core discovery engine, allowing a single workflow to seamlessly handle single-objective, multi-objective, and multi-component design. Meanwhile, a hierarchical experience mechanism organizes search trajectories into a task-level tree to guide exploration and consolidates cross-task patterns into reusable skills. Across six representative benchmark tasks, AlgoEvo matches or surpasses specialized methods with substantially fewer evaluations and reduced token consumption, demonstrating strong intra-task accumulation, cross-task transfer, and the ability to reproduce or exceed existing state-of-the-art performance through flexible skill activation.",
    "published": "2026-09-14T16:24:27Z",
    "updated": "2026-09-14T16:24:27Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.15820"
  },
  {
    "id": "2609.15818",
    "title": "Atria Dawn: The Dawn of Agentic Superintelligence",
    "authors": [
      "Honglin Guo",
      "Tao Gui",
      "Yicheng Chen",
      "Guanting Dong",
      "Qiming Ge",
      "Yuyang Hu",
      "Zixian Huang",
      "Jiajie Jin",
      "Alexander Lam",
      "Yining Li",
      "Jiahang Lin",
      "Yanjiang Liu",
      "Xinyu Lu",
      "Haijun Lv",
      "Junlin Shang",
      "Qisheng Su",
      "Guoqiang Wang",
      "Rui Wang",
      "Zhecan Wang",
      "Hao Xiang",
      "Xinchen Xie",
      "Shuhao Xing",
      "Xiaoyu Xing",
      "Wanghan Xu",
      "Xinyu Yang",
      "Yajie Yang",
      "Chengfeng Zhao",
      "Haoran Zhao",
      "Ruojun Zhou",
      "Yunhua Zhou",
      "Yicheng Zou",
      "Kun Cai",
      "Qiye Cai",
      "Xinmeng Che",
      "Haodong Chen",
      "Jiabei Chen",
      "Jiahao Chen",
      "Jiayi Chen",
      "Yujia Chen",
      "Lizhi Cui",
      "Youheng Dai",
      "Xin Deng",
      "Yi Dong",
      "Shihan Dou",
      "Chenya Gu",
      "Xu Guo",
      "Ding Han",
      "Feiyang Hao",
      "Haotan He",
      "Jie Hou",
      "Binze Hu",
      "Zijian Hu",
      "Junhao Huang",
      "Huicheng Jiang",
      "Jiazhen Jiang",
      "Shufan Jiang",
      "Jiahao Kuang",
      "Bowen Lai",
      "Bo Li",
      "Jiaqiang Li",
      "Peng Li",
      "Qilong Li",
      "Zhuoqun Li",
      "Jiaxiang Liu",
      "Shuainan Liu",
      "Tong Liu",
      "Yi Liu",
      "Zhonghang Lu",
      "Jianwen Luo",
      "Yanyi Luo",
      "Huijie Lv",
      "Ningsheng Ma",
      "Zerun Ma",
      "Houcheng Min",
      "Chengjun Pan",
      "Qiyuan Peng",
      "Xiaoxuan Peng",
      "Jianmin Qian",
      "Jiantao Qiu",
      "Wanying Ren",
      "Huayu Sha",
      "Jifei Shan",
      "Zixin Shang",
      "Bing Shao",
      "Zhuohui Sheng",
      "Jiayang Shi",
      "Yang Shu",
      "Aierpanjiang Simayi",
      "Sirui Song",
      "Yuxiao Song",
      "Zhe Sun",
      "Zhichao Sun",
      "Wenzhe Tan",
      "Wenhui Tian",
      "Zhongbo Tian",
      "Hanchen Wang",
      "Pengbo Wang",
      "Rui Wang",
      "Yiding Wang",
      "Yuhui Wang",
      "Zhiheng Xi",
      "Caijun Xu",
      "Chao Xu",
      "Yongfeng Xu",
      "Xiaolei Yang",
      "Zhixiong Yang",
      "Qian Yao",
      "Shihong Yi",
      "Yuankai Ying",
      "Jia Yu",
      "Dingbo Yuan",
      "Hao Yuan",
      "Junjie Yuan",
      "Bo Zhang",
      "Caixian Zhang",
      "Qiuyinzhe Zhang",
      "Jiyuan Zhao",
      "Penghao Zhao",
      "Ying Zhao",
      "Pujun Zheng",
      "Xiaoxue Zhong",
      "Xiaohao Zhou",
      "Xinyu Zhou",
      "Dongsheng Zhu",
      "Guanru Zhu",
      "Yulun Zhu",
      "Yaojie Lu",
      "Tao Ji",
      "Hongyu Lin",
      "Yutao Zhu",
      "Pengfei Cao",
      "Guoxiu He",
      "Xianpei Han",
      "Ben He",
      "Zhicheng Dou",
      "Kang Liu",
      "Qi Zhang",
      "Le Sun",
      "Jun Zhao",
      "Ji-Rong Wen",
      "Xuanjing Huang",
      "Yu-Gang Jiang",
      "Bowen Zhou"
    ],
    "abstract": "As AI agents become participants in the development of their successors, they reshape both the production of intelligence and the role of human researchers. We introduce Atria Dawn Preview, a foundation agentic language model designed for scientific research and engineering workflows, with the goal of expanding the frontier of agent productivity in the real world. This model is trained via a Verifiable Experience Pipeline that connects tool-mediated interactions to executable environments and externally verified outcomes. Across 16 benchmarks spanning real-world research, engineering, and digital work, Atria Dawn Preview is competitive with frontier agents and achieves the highest reported score on five of them. Beyond standalone performance, we examine the real research-and-development process behind this model as a case study of human--AI collaboration, analyzing 769 task records from 56 participants together with agent logs. When asked to evaluate completed tasks under comparable conditions, participants rated about one-third of completed AI-assisted tasks as infeasible without AI. More strikingly, agents frequently propose methods and implement revisions, while humans retain most final decisions and guide exploration through judgment and feedback. These observations indicate a shift from task-level execution to project-level partnership, with human effort concentrating on what is worth pursuing and how evidence should guide research. Progress toward more autonomous AI research must therefore advance both the capacity for discovery and the capacity for meaningful human oversight, preserving accountable human authority over the risks and direction of continued development.",
    "published": "2026-09-14T16:22:30Z",
    "updated": "2026-09-14T16:22:30Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.15818"
  },
  {
    "id": "2609.15779",
    "title": "EvoOntology: A Self-Evolving Ontology Layer for Data Agents",
    "authors": [
      "Meiduo Chong",
      "Shaolei Zhang",
      "Ju Fan",
      "Xiaoyong Du"
    ],
    "abstract": "Data agents aim to fulfill natural-language instructions over heterogeneous data, including tables, files, and databases. However, data agents face a challenging agent-data gap: heterogeneous data resides outside the agent, while the agent can access it (e.g., column names and file paths) only through generic tools. Existing approaches either let agents directly explore raw data sources or inject manually constructed semantic layers into prompts. However, neither scales well to large heterogeneous data sources nor adapts to different agent behaviors. In this paper, we introduce EvoOntology, a self-evolving ontology layer for data agents. EvoOntology encapsulates the ontology as an MCP server comprising a schema layer, a content layer, and a tool layer, enabling agents to actively query and interact with the ontology at runtime. To this end, we introduce a builder agent for autonomous ontology construction and a self-evolution loop that continuously refines the ontology through attribution-guided typed edits that are accepted only after a backbone-conditional paired evaluation. Experiments on three well-adopted data-agent benchmarks with four LLM backbones demonstrate that EvoOntology consistently outperforms strong baselines and existing semantic-layer approaches, effectively bridging the agent-data gap and enabling more effective interaction with heterogeneous data. Code: https://github.com/ruc-datalab/EvoOntology",
    "published": "2026-09-14T15:59:24Z",
    "updated": "2026-09-14T15:59:24Z",
    "categories": [
      "cs.AI",
      "cs.CL",
      "cs.DB"
    ],
    "url": "https://arxiv.org/abs/2609.15779"
  },
  {
    "id": "2609.15773",
    "title": "Transfer Learning for Socioeconomic Estimation in Forced-Displacement Settings",
    "authors": [
      "Steven Ndung'u",
      "Adel Daoud",
      "Ismael Yacoubou Djima",
      "Hai-Anh H. Dang",
      "Patrick Michael Brock"
    ],
    "abstract": "Progress in inclusive household surveys has strengthened socioeconomic evidence for forcibly displaced populations, providing indispensable benchmarks on living conditions and welfare. However, these surveys remain resource-intensive and periodic, while conditions can change between rounds, particularly in settings affected by fragility, conflict, and violence. More frequently updated, spatially granular complementary evidence is therefore needed to identify where socioeconomic conditions may be changing between survey rounds and to inform operational prioritization. Earth observation and machine learning offer a scalable source of spatially explicit socioeconomic information. However, tools developed for general populations have not been systematically adapted and evaluated in forced displacement settings, where living conditions, settlement patterns, and displacement impacts may differ substantially. We address this gap by adapting a multimodal spatiotemporal vision transformer, pretrained on Demographic and Health Survey data from approximately 1.2 million households across 36 African countries, to forced displacement and host community settings in South Sudan, Cameroon, and Zambia. We develop and evaluate the updated, adapted model using socioeconomic indices derived from UNHCR FDS and RMS data. Our results show that satellite-derived geospatial covariates explain up to 66% of the variation in socioeconomic outcomes in camp-intersecting grids, with a mean absolute error (MAE) of 4.37 index points, and 41% in non-camp-intersecting areas, with an MAE of 5.41. The framework complements and adds value to periodic household surveys by filling critical spatial and temporal data gaps with regularly updated, model-based socioeconomic estimates. These estimates sustain insight between survey rounds and support timely humanitarian prioritization and field verification.",
    "published": "2026-09-14T15:55:57Z",
    "updated": "2026-09-14T15:55:57Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.15773"
  },
  {
    "id": "2609.15772",
    "title": "Event-Native Symbolic-Temporal Spike Encoding Framework for Heterogeneous Cyber Streams",
    "authors": [
      "Dalton Diez",
      "Peyton Andras",
      "Max Shroyer",
      "James Ghawaly"
    ],
    "abstract": "Spiking neural networks (SNNs) have shown promise for sparse, event-driven computation through stateful processing that is naturally compatible with low-power edge hardware. These properties align with cyber monitoring, where data arrives asynchronously, and malicious behavior often emerges through temporal patterns across event sequences. However, cyber streams are not composed solely of continuous numeric signals: their informative structure is also carried by categorical identifiers, irregular timing, and local behavioral context. Traditional rate- and population-based spike encodings are not naturally suited to these heterogeneous semantics, while conventional intrusion detection system (IDS) pipelines typically resolve the mismatch by converting raw events into flows, fixed aggregation windows, or dense tensors. Although useful for conventional classifiers, these transformations introduce buffering latency, obscure native temporal structure, and weaken the computational advantages of event-driven neuromorphic processing. We introduce an event-native symbolic-temporal spike encoding framework that maps heterogeneous cyber events directly into sparse, spike-compatible inputs. By assigning encoding roles to semantic identity, local frequency context, and inter-event timing, the framework preserves categorical semantics and temporal dynamics. We validate the approach on packet-level Network IDS and extend it to message-level CAN IDS, using both domains to evaluate whether the encoding exposes usable structure for recurrent SNNs operating directly on native event streams. Under edge-oriented, $μ$Caspian-aligned hardware constraints, compact recurrent SNNs achieve strong anomaly detection performance, with an operational hybrid metric ($J_{hybrid}$) of 0.987 on Network IDS and 0.980 on CAN IDS.",
    "published": "2026-09-14T15:55:43Z",
    "updated": "2026-09-14T15:55:43Z",
    "categories": [
      "cs.NE",
      "cs.AI",
      "cs.CR"
    ],
    "url": "https://arxiv.org/abs/2609.15772"
  },
  {
    "id": "2609.15763",
    "title": "Sylvas: Synergistic Learning Value based Device Scheduling in Federated Continual Learning",
    "authors": [
      "Yuxuan Sun",
      "Yuxuan Bai",
      "Tan Chen",
      "Sheng Zhou",
      "Zhisheng Niu"
    ],
    "abstract": "Federated continual learning (FCL) enables shared global models to continuously adapt to distributed and non-stationary data streams, making it important for Internet of Things applications such as intelligent transportation, industrial monitoring, and unmanned systems. Under spatio-temporal data distribution dynamics and label scarcity, a key challenge is how to quantify the contribution of each edge device to global learning performance and schedule the most valuable devices under resource constraints for timely model updating. This article presents Sylvas, a synergistic learning value based device scheduling framework for FCL at the wireless edge. Sylvas evaluates the learning value of distributed data from two perspectives: distributional value, which characterizes the contribution of device data to global model learning from a spatio-temporal distribution perspective, and label value, which captures the quantity and reliability tradeoff of pseudo-labeled data. By integrating these factors into a synergistic learning value metric, Sylvas schedules devices with high learning value while satisfying communication and computation resource constraints. Case studies demonstrate that Sylvas supports timely model adaptation under spatio-temporal distribution dynamics and effectively exploits unlabeled data.",
    "published": "2026-09-14T15:48:21Z",
    "updated": "2026-09-14T15:48:21Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.15763"
  },
  {
    "id": "2609.15746",
    "title": "TopoRig: Topology-Agnostic Facial Rigging via Multi-Source Supervision",
    "authors": [
      "Andrew Fleet",
      "Soroush Mehraban",
      "Vida Adeli",
      "Cole Clifford",
      "Babak Taati"
    ],
    "abstract": "Automatic facial rigging across heterogeneous mesh topologies remains challenging because high-quality expression supervision is often tied to canonical templates, while deformation transfer to arbitrary meshes can introduce geometric artifacts and correspondence errors. We present TopoRig, a topology-agnostic facial rigging framework that predicts FACS-conditioned deformations directly on input mesh vertices while preserving the original topology. Starting from the ICT FaceKit expression model, we construct complementary supervision from accurate but template-biased common-topology rigs, topology-diverse but noisier transferred rigs, and targeted image-based cues for controls poorly captured by geometric transfer. TopoRig combines local surface geometry, landmark-relative semantic features, global shape context, and FACS controls to predict per-vertex displacements. We train on 3,496 generated identities using 45 non-gaze expression controls from the 53-control ICT FaceKit vocabulary. On held-out identities and unseen mesh topologies, TopoRig more faithfully reproduces the reference expression space than prior neural facial-rigging methods, while qualitative results show consistent localized deformations across diverse character geometries. Ablations demonstrate that semantic landmark features and complementary supervision improve cross-identity and cross-topology generalization. Overall, TopoRig amortizes heterogeneous and imperfect expression supervision into a single topology-preserving deformation model.",
    "published": "2026-09-14T15:37:03Z",
    "updated": "2026-09-14T15:37:03Z",
    "categories": [
      "cs.GR",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.15746"
  },
  {
    "id": "2609.15745",
    "title": "Look Before You Leap: Factual Decoding with Internal Attribution Signals",
    "authors": [
      "Hayeong Ryu",
      "JungMin Yun",
      "Byeonggeuk Lim",
      "Sunhee Jo",
      "YoungBin Kim"
    ],
    "abstract": "Hallucination remains a critical challenge in large language models (LLMs), where early factual errors compound through autoregressive generation in a snowballing effect that neither post-hoc correction nor weight-level intervention can effectively preempt. We propose DescaPE (DEcoding Signal Control Against Path Error-snowballing), a decoding framework that leverages internal model signals to suppress hallucination-prone trajectories at inference time. Through sliding-window MLP ablation, we identify a factual-salient layer span within LLMs whose derived signal is selectively elevated for factual tokens and exhibits anomalous spikes at hallucination-prone steps. We train a lightweight probe to approximate this signal from a single forward pass and integrate it into candidate scoring to penalize high-risk continuations while rewarding factually grounded ones. Experiments across five factuality benchmarks on three LLMs demonstrate that DescaPE achieves factuality improvements over decoding-time baselines in multiple settings, while incurring only 1.10x latency overhead in our efficiency evaluation. Our code is available at https://github.com/hayeonggg/DESCAPE.",
    "published": "2026-09-14T15:35:42Z",
    "updated": "2026-09-14T15:35:42Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.15745"
  },
  {
    "id": "2609.15744",
    "title": "Design of a Deep Learning Credit Risk Early Warning System Integrating Multi-source Heterogeneous Data",
    "authors": [
      "LiYang Wang",
      "Zhen Zhong",
      "Zhen Tian",
      "Keyu Chen",
      "Keyu Chen"
    ],
    "abstract": "Advancements in data fusion and real-time analytics technologies have opened new avenues for addressing complex domain challenges. Financial risk early warning systems often suffer from inefficiency due to information silos and monitoring delays. This paper proposes a credit risk early warning system based on heterogeneous information fusion. The system employs a model architecture integrating deep neural networks and attention mechanisms to extract multidimensional features from diverse data sources such as transaction behaviors and social networks, thereby establishing an early identification mechanism for corporate and individual credit risks. System testing demonstrates that this approach significantly enhances the accuracy and timeliness of risk warnings, outperforming traditional rule-based engine solutions. The findings offer innovative insights for early intervention in financial risks, holding practical significance for safeguarding financial stability.",
    "published": "2026-09-14T15:35:41Z",
    "updated": "2026-09-14T15:35:41Z",
    "categories": [
      "cs.AI",
      "cs.CE",
      "cs.DB",
      "cs.LG",
      "q-fin.RM"
    ],
    "url": "https://arxiv.org/abs/2609.15744"
  },
  {
    "id": "2609.15740",
    "title": "A Language-Guided Multimodal Foundation Model for Zero-Shot and Multi-Task Brain Signal Analysis",
    "authors": [
      "Mingzhi Chen",
      "Yiyu Gui",
      "Guibo Luo",
      "Yuchao Yang"
    ],
    "abstract": "Brain signal analysis is essential for both neuroscience research and clinical diagnostics, yet current approaches face critical limitations. End-to-end models require task-specific retraining and exhibit limited generalization, while pre-trained models lack semantic depth and still depend on extensive fine-tuning. Meanwhile, general-purpose multimodal foundation models, though powerful in other domains, struggle to interpret brain signals due to representational misalignment and lack of domain knowledge. This study introduces a multimodal foundation model for zero-shot and multi-task brain signal analysis (METIS) through a unified language-signal alignment framework. METIS is pretrained on the largest and most diverse brain-signal corpus to date, comprising over 70,000 h of recordings from more than 11,000 subjects across 20 datasets. In a comprehensive zero-shot evaluation across 12 datasets, METIS outperformed the leading generalist model by over 20.9% in average accuracy. Remarkably, without any fine-tuning, METIS's performance matches or exceeds that of supervised, task-specific models. Furthermore, METIS demonstrates exceptional data efficiency and strong generalization, achieving an average AUROC advantage of over 16.0% in few-shot settings and 15.9% in cross-dataset transfer. This work establishes a new paradigm for general-purpose brain signal analysis, paving the way for next-generation neurotechnology.",
    "published": "2026-09-14T15:32:38Z",
    "updated": "2026-09-14T15:32:38Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.15740"
  },
  {
    "id": "2609.15735",
    "title": "Transforming harmonic coefficients for 3D splat compression",
    "authors": [
      "Tam Thuc Do",
      "Philip A. Chou",
      "Gene Cheung"
    ],
    "abstract": "We address the problem of color attribute compression for 3D splats. We show that all images generated by 3D splats are linear in the coefficients for each color channel, each spherical harmonic, and each splat, and we identify a basis for the space of all such images. We identify an inner product for the coefficient space that induces the squared error loss on images. We show that orthonormalizing the coefficients with respect to this innner product before coding can yield over 2 dB gain.",
    "published": "2026-09-14T15:28:29Z",
    "updated": "2026-09-14T15:28:29Z",
    "categories": [
      "eess.SP",
      "cs.CV",
      "cs.GR"
    ],
    "url": "https://arxiv.org/abs/2609.15735"
  },
  {
    "id": "2609.15727",
    "title": "Are LLMs Good Financial User Simulators? A Preliminary Study",
    "authors": [
      "Jiajie He",
      "Jiangyuan Hong",
      "Dongling Ni",
      "Wenjin Liu",
      "Xintong Chen"
    ],
    "abstract": "Large language models (LLMs) are increasingly used as user simulators, but their ability to reproduce evolving individual financial decisions remains unclear. We present a preliminary study in a controlled paper-trading environment with 120 volunteers. Participants used non-redeemable virtual funds under real-time market conditions; no real brokerage accounts, real-money positions, or real transaction records were accessed. Given only information available before a prediction cutoff, a simulator predicts the participant's next-trading-day action, traded security, and transaction quantity. We evaluate temporally aligned rolling predictions and compare settings with and without point-in-time market information. Market context improves action and ticker prediction in the controlled ablation, while transaction sizing remains difficult. We also observe systematic behavioral compression: models overproduce hold actions, underpredict sell decisions, and simplify multi-security transactions. These results provide an initial empirical characterization and motivate larger-scale evaluation of individual, temporal, and portfolio-level behavioral fidelity.",
    "published": "2026-09-14T15:23:26Z",
    "updated": "2026-09-14T15:23:26Z",
    "categories": [
      "cs.AI",
      "cs.CY",
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2609.15727"
  },
  {
    "id": "2609.15726",
    "title": "Bench2Dex: Benchmarking Visuo-Tactile Bimanual Dexterous Manipulation Across Dexterous Hands",
    "authors": [
      "Zhenjie Yang",
      "Yideng Zhang",
      "Dongjie Zhang",
      "Chenyu Jiang",
      "Xianshuai Liu",
      "Yufeng Li",
      "Zuhao Ge",
      "Xingyu Jiao",
      "Zheng Zhang",
      "Kaiyu He",
      "He Wang",
      "Yuwen Zhong",
      "Yi Deng",
      "Muyun Jiang",
      "Xianliang Huang",
      "Haisheng Su",
      "Donghang Zhang",
      "Jian Zhang",
      "Xue Yang",
      "Hongyang Li",
      "Zuxuan Wu",
      "Yu-Gang Jiang",
      "Xiaosong Jia",
      "Junchi Yan"
    ],
    "abstract": "Tactile sensing provides contact information that can be difficult to infer from vision alone, but tactile hardware for dexterous hands has not converged to a common design. Dexterous hands differ in finger structure, contact surfaces, and sensor layouts, while simulated tactile signals still differ from measurements produced by physical sensors. These factors make it difficult to study visuo-tactile manipulation across diverse dexterous hands within a consistent experimental setting. We present Bench2Dex, a simulation benchmark for visuo-tactile bimanual manipulation across 12 dexterous hands. We adapt existing robot models with a shared simulated tactile interface that converts local contact geometry into image-like tactile observations. The interface provides a consistent observation format across different hand morphologies without attempting to reproduce the output of a specific physical tactile sensor. Bench2Dex includes 26 bimanual manipulation tasks that involve tool use, articulated-object interaction, and multi-stage manipulation, together with about 1.3K human-teleoperated demonstrations. The benchmark provides synchronized visual, tactile, proprioceptive, action, and object-state observations, together with executable task metrics. For robustness, we group seven perturbation types into invariance axis, where the correct action does not change, and equivariance axis, where the correct action changes together with the perturbation. We evaluate ACT, Diffusion Policy, pi0.5, and GR00T N1.5 on Bench2Dex and report their performance and failure modes. Bench2Dex is meant as a platform for studying visuo-tactile learning across dexterous hands. It does not assume that simulated tactile observations can replace real tactile sensing; it offers a shared setting for algorithm development while tactile hardware and simulation models are still evolving.",
    "published": "2026-09-14T15:22:59Z",
    "updated": "2026-09-14T15:22:59Z",
    "categories": [
      "cs.RO",
      "cs.AI",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.15726"
  },
  {
    "id": "2609.15722",
    "title": "Data storytelling meets interpretable machine learning: Decoding AI decisions for non-experts without revealing sensitive data and model details",
    "authors": [
      "Lemen Chao",
      "Zixuan Yang",
      "Anran Fang",
      "Mingran Sun",
      "Ming Lei"
    ],
    "abstract": "AI-driven automated decision-making requires both predictive performance and interpretability. Recent advances in interpretable machine learning (IML) provide tools for explaining model predictions, but the technical complexity of these explanations may hinder accessibility to non-experts. To address this challenge, this study integrates data storytelling with IML to enhance the explainability of AI-generated decisions for a broader audience. Following the design science research (DSR) paradigm, this study proposes a formal definition of data storytelling in IML, introduces the DIST Pyramid to align data storytelling with IML, and presents the I-P-O Model to describe their interactions. It further develops an architecture to explain AI decisions through distinct \"What-if\" and \"Why-not\" event-generation processes. The architecture also employs data desensitization to protect sensitive input data. To validate the approach, a case study is conducted with the Boston Housing dataset, using SHapley Additive exPlanations (SHAP) values and large language models (LLMs) to generate data stories with And-But-Therefore (ABT) structures. An empirical evaluation shows that 76.4% and 74.3% of respondents rated the \"What-if\" and \"Why-not\" data stories as more comprehensible, with significantly higher accessibility scores than traditional SHAP visualizations. The paper concludes with the presentation of a narrative interpretation framework that integrates IML and data storytelling, thereby expanding the research scope as well as the practical applicability of AI decision-making.",
    "published": "2026-09-14T15:20:56Z",
    "updated": "2026-09-14T15:20:56Z",
    "categories": [
      "cs.AI",
      "cs.CL",
      "cs.HC",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2609.15722"
  },
  {
    "id": "2609.14596",
    "title": "Direct Conditional Transition Sampling for Diffusion Inverse Problems",
    "authors": [
      "Qi Yu",
      "Hanlin Wu",
      "Xiaohui Sun"
    ],
    "abstract": "Training-free diffusion inverse solvers typically choose between local measurement guidance and costly clean-space posterior updates. Independent posterior refresh can improve global correction by sampling a clean conditional and re-noising it, but its practical realization requires probability-flow ODE integration and clean-space Markov chain Monte Carlo (MCMC). We propose Direct Conditional Transition Sampling (DCTS), a direct stochastic-flow approximation to the same ideal refresh target. Rather than explicitly drawing a clean sample, DCTS estimates the measurement-conditioned clean mean along a short inner path and transports Gaussian source noise directly to the next noisy state. A denoiser-compatible sufficient statistic and a covariance-scaled operator update enable this conditional-mean estimation. Experiments on four inverse problems demonstrate that DCTS achieves competitive reconstruction quality with up to $16.8\\times$ speedups over competing methods.",
    "published": "2026-09-13T15:24:33Z",
    "updated": "2026-09-13T15:24:33Z",
    "categories": [
      "cs.CV",
      "stat.ML"
    ],
    "url": "https://arxiv.org/abs/2609.14596"
  },
  {
    "id": "2609.14595",
    "title": "Diagnosing Temporal Misalignment in Multichannel Time-Series Classification with Minimum Description Length",
    "authors": [
      "Sebastian Buschjäger",
      "Michael Frichert",
      "Daniel Kuhe",
      "Jian-Jia Chen"
    ],
    "abstract": "Multichannel time-series classification commonly assumes synchronized sensor streams, although latency, clock drift, and preprocessing can introduce relative delays during data collection or after deployment. Existing synchronization solutions are often hardware-specific and difficult to apply retrospectively. Consequently, synchronization problems may remain undetected while classification performance is suboptimal. We introduce a classifier- and label-free diagnostic based on minimum description length (MDL). Our method applies candidate temporal shifts to sensor groups and measures how efficiently one group can be encoded through a representation of the remaining channels. An increased codelength indicates that the shift destroys shared temporal structure, whereas the minimum identifies the alignment most strongly supported by the data. Unlike learned synchronization methods, the diagnostic requires neither retraining nor a trusted aligned reference and can therefore test both training and deployment data for misalignments. Experiments on two controlled synthetic tasks and nine real-world datasets show that the metric exposes alignment structure and can recover accuracy under induced deployment drift. A whole-dataset audit further identifies stable nonzero MDL optima in established benchmarks including FordChallenge, Opportunity, PAMAP2, and UCIActivity, revealing potential systematic offsets that conventional model evaluation does not expose. Our method thus provides a general-purpose tool for detecting, understanding, and correcting temporal misalignment throughout the time-series learning pipeline. Our code is available under https://github.com/sbuschjaeger/mdl-temporal-misalignment.",
    "published": "2026-09-13T15:24:24Z",
    "updated": "2026-09-13T15:24:24Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "cs.AR"
    ],
    "url": "https://arxiv.org/abs/2609.14595"
  },
  {
    "id": "2609.14593",
    "title": "SENTINEL: A Multi-Pathway Architecture for Detecting Living-Off-the-Land APT Attacks on Windows Command Lines",
    "authors": [
      "Ahad Bin Islam Shoeb",
      "Kamrul Hasan",
      "Jamal Uddin Tanvin",
      "Liang Hong",
      "Imtiaz Ahmed",
      "Md Arif Billah",
      "Al Amin"
    ],
    "abstract": "Living-Off-the-Land (LOTL) is the dominant evasion technique of Advanced Persistent Threat (APT) actors, exploiting legitimate Windows utilities to conduct malicious operations without deploying custom malware and enabling state-sponsored campaigns to maintain persistent access within military and critical defense infrastructure for extended periods. Existing detection methods fail against obfuscated commands and multi-stage attack sequences, as demonstrated by the Volt Typhoon APT campaign, which maintained undetected access to U.S. critical infrastructure for over 18 months using exclusively signed Windows utilities. We present SENTINEL, a multi-pathway architecture integrating BERT-based semantic encoding, character-level CNN for obfuscation invariance, inter-command attention for multi-stage pattern recognition, and autoencoder-based anomaly scoring. Evaluated on a balanced Volt Typhoon benchmark derived from Microsoft and CISA threat intelligence advisories, SENTINEL achieves 92.0% accuracy on documented state-sponsored attack commands and 91.2% on obfuscated variants, compared to 74.0% and 72.0% for standalone BERT. Per-class analysis reveals that models achieving over 98% overall validation accuracy on imbalanced data exhibit only 44-58% malicious recall on balanced adversarial sets. Character-level processing contributes 5.6 percentage points of obfuscation invariance, and the 8.0 percentage point gap over augmentation-only baselines confirms structural architectural value beyond data-driven robustness alone.",
    "published": "2026-09-13T15:20:34Z",
    "updated": "2026-09-13T15:20:34Z",
    "categories": [
      "cs.CR",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.14593"
  },
  {
    "id": "2609.14592",
    "title": "AI Deployment Accountability Engineering: A Vision for Accountable AI in Safety-Critical Socio-Technical Systems",
    "authors": [
      "Murat Kantarcioglu"
    ],
    "abstract": "Artificial intelligence systems are rapidly becoming critical components in healthcare, finance, public services, and other safety-critical domains. Yet the engineering practices used to evaluate these systems remain predominantly model-centric, emphasizing properties such as accuracy, robustness, fairness, and interpretability before deployment. These properties are necessary but insufficient once an AI system operates within an ever changing socio-technical environment characterized by distribution shifts, institutional constraints, human feedback loops, privacy requirements, and interactions among multiple AI agents. This vision paper introduces AI Deployment Accountability Engineering (ADAE), a proposed AI engineering subdiscipline concerned with establishing measurable, continuous, and actionable accountability for deployed AI systems. ADAE treats accountability as a deployment-layer property rather than solely as a property of an individual model. It seeks to determine whether an AI-enabled system continues to operate within acceptable risk limits, identify the contexts in which failures emerge, attribute failures across interacting technical and human components, translate technical failures into downstream consequences, and support timely intervention. We articulate a research agenda built around four interconnected pillars: structured discovery of context-dependent failure modes, privacy-preserving accountability measurement, system-level risk analysis for agentic AI, and translation of technical failures into operational, and institutional risks. The broader goal is to establish foundational principles, mathematical tools, and system architectures for accountable AI deployment across safety-critical applications.",
    "published": "2026-09-13T15:18:41Z",
    "updated": "2026-09-13T15:18:41Z",
    "categories": [
      "cs.AI",
      "cs.CR",
      "cs.CY"
    ],
    "url": "https://arxiv.org/abs/2609.14592"
  },
  {
    "id": "2609.14590",
    "title": "Reverse Spatio-Temporal Disease Progression Modelling",
    "authors": [
      "Ulugbek Shernazarov",
      "Moucheng Xu",
      "Inomjon Ramatov"
    ],
    "abstract": "Deep learning-based spatio-temporal disease progression models commonly overlook the incubation period of progressive diseases, limiting the use of those models in early interventions, which are vital for not easily reversible diseases such as Alzheimer's. This is because, the existing deep learning based longitudinal disease-progression models are almost always run forward: from an observed baseline they predict future decline. In many clinical settings, however, imaging begins only after pathology is suspected or already visible, the earlier, healthier patient-specific reference was never acquired. To address this, we propose to study reverse disease progression prediction: given later diseased anatomy, reconstruct the unobserved healthier anatomy that preceded it. We use a two-stage model in which a frozen 3D vector-quantised autoencoder defines a compact discrete latent space, while a Neural Ordinary Differential Equation (ODE) learns continuous-time dynamics in that space. A recurrent encoder reads late observations in reverse temporal order, initialises the latent state, and the ODE is integrated backwards across the trajectory. On a controlled Morpho-MNIST benchmark with a sinusoidal perturbation, our model successfully recovered the unseen previous states from later observations of the non-monotonic trajectory. On longitudinal brain MRIs from Alzheimer's Disease Neuroimaging Initiative, at the task to recover the previous unseen trajectory towards healthy states of the patients from observed later diseased states, our model outperforms the baselines that uses copy-nearest and mean-observed, with positive disease-reversal scores in every diagnostic stratum. We hope that our work can provide insights and tools towards discovering the incubation periods from single-shot scans, and developing early interventions of diseases based on imaging.",
    "published": "2026-09-13T15:17:59Z",
    "updated": "2026-09-13T15:17:59Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.14590"
  },
  {
    "id": "2609.16071",
    "title": "Schema-Adaptive Action-Conditioned JEPA for Cross-Machine CNC Transfer under Partial Sensor Overlap",
    "authors": [
      "Ayoub Louaye Bouaziz",
      "Matthieu Ostertag",
      "Anton Demasles"
    ],
    "abstract": "Cross-machine deployment of industrial world models requires transfer across changes in dynamics, sensing interfaces, sampling regimes, and control units. We study a schema-adaptive action-conditioned Joint-Embedding Predictive Architecture (SAAC-JEPA) for CNC dynamics, where the source machine has 17 canonical sensor channels and the target shares only 10. Evaluation uses group-disjoint source splits, source-only normalization, held-out self-supervised validation, unit audits, and a sealed target test after model locking. Across five seeds, JEPA pretraining gives no clean-source forecasting gain: scratch and pretrained-body models obtain \\(\\mathrm{RMSE}=0.811\\pm0.022\\) and \\(0.813\\pm0.022\\). A source-only search over 20 candidates selects a schema-consistent action-conditioned JEPA after seven-seed stability checks. On the confirmatory target pass, the locked model reaches zero-shot \\(\\mathrm{RMSE}=0.546\\), \\(R^2=0.012\\), and \\(\\mathrm{NLL}=0.52\\), outperforming persistence but not RevIN-equipped PatchTST and iTransformer baselines (\\(0.503\\) and \\(0.498\\)). A pre-declared paired ablation shows that RevIN in the same architecture improves RMSE to \\(0.495\\pm0.004\\) over three seeds, but degrades target calibration (\\(\\mathrm{NLL}=20.6\\)) on stationary context windows. A pre-lock adaptation sweep further reduces RMSE to \\(0.520\\) with limited target support. These results show that source-domain forecasting accuracy alone is insufficient to assess industrial predictive representations, and that cross-machine adaptation under partial sensor overlap is a distinct evaluation axis.",
    "published": "2026-09-13T15:10:06Z",
    "updated": "2026-09-13T15:10:06Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.16071"
  },
  {
    "id": "2609.16070",
    "title": "Efficient Multimodal Generative Recommendation with Latent Narrative Reasoning",
    "authors": [
      "Chenxing Wang",
      "Nantao Zheng",
      "Hao Miao",
      "Juyuan Wang",
      "Xinke Jiang",
      "Yuchen Fang",
      "Aolin Li",
      "Haijun Wu"
    ],
    "abstract": "Generative recommendation reformulates item prediction as semantic identifier generation, yet episodic content introduces a fundamentally different setting where the target is determined by narrative evolution rather than user preference. This task requires models to understand multimodal storyline progression while addressing the efficiency challenges caused by redundant visual contexts and costly explicit reasoning generation. We propose \\textbf{NarraLite}, an efficient multimodal generative recommendation framework that jointly compresses perception and reasoning. Specifically, Progressive Spectral Compression selectively distills long visual contexts into compact narrative-relevant evidence, preserving transition-critical information while reducing redundant visual computation. Latent Narrative Reasoning introduces context-routed latent reasoning tokens and aligns their contextualized representations with future continuation semantics, enabling implicit narrative inference without autoregressively decoding textual rationales. We further establish a user-agnostic multimodal benchmark for short-form drama continuation across UGC, PGC, and OOD settings. Extensive experiments demonstrate that NarraLite consistently improves continuation accuracy, narrative coherence, and robustness over existing approaches, while achieving a favorable accuracy--efficiency trade-off.",
    "published": "2026-09-13T15:04:05Z",
    "updated": "2026-09-13T15:04:05Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.16070"
  },
  {
    "id": "2609.14578",
    "title": "A Building as a Repository: KIR, a Typed Intermediate Representation for Agent-Authored Building Information Models",
    "authors": [
      "Dmitry Kuklev"
    ],
    "abstract": "Autonomous agents that author building information models need more than access to a host API. They need a representation of what they intended, what a compiler decided on their behalf, what was refused, what was observed after execution and what remains unknown. We present KIR, a typed intermediate representation in which a building is authored as a program held in a versioned repository and lowered to host applications as build targets. KIR is organised around seven ways in which a generator writing into a stateful, partially observable host goes silently wrong, and gives each a representation in data: ambiguous selectors become typed refusals with candidates; defaults keep their provenance; obligations that will not be checked are named before execution; vacuous witnesses are rejected statically; a lost transaction response becomes the state UNCONFIRMED with a verify-before-retry rule; the reverse path obeys a census invariant; and decisions are bound by digest to the state they were made against. On a pinned snapshot with 83 operation contracts and Revit as the only backend, offline experiments refuse 29 of 42 stress-test programs with diagnostic codes and no uncaught exception, name 38 of 377 witness obligations as unwitnessable, admit 31 of 100 combinations of execution, witness and acceptance states under seven stated invariants, and find no vacuous witness in 219 certificate runs; a 60-storey tower is 11,263 characters as KIR against 3,709,235 characters of emitted C#. Native Revit runs are reported from project records and kept separate from reproduced results. A controlled comparison with agents that write host code directly is specified but not yet executed; it is the principal open question.",
    "published": "2026-09-13T15:01:58Z",
    "updated": "2026-09-13T15:01:58Z",
    "categories": [
      "cs.CV",
      "cs.SE"
    ],
    "url": "https://arxiv.org/abs/2609.14578"
  },
  {
    "id": "2609.14572",
    "title": "AlgoRAG: Retrieval-Augmented Generation for Theoretical Computer Science Education -- A Comprehensive Evaluation Framework for Algorithm Analysis and Complexity Theory",
    "authors": [
      "Sushan Adhikari"
    ],
    "abstract": "Teaching abstract theoretical computer science (TCS) concepts such as algorithm analysis and complexity theory is challenging because students must handle formal proofs and asymptotic reasoning that conventional resources rarely explain in an adaptive, on-demand way. We present AlgoRAG, a specialized Retrieval-Augmented Generation (RAG) system that couples a large language model (LLM) with a curated, domain-specific knowledge base to address these challenges. The knowledge base integrates authoritative textbooks, 847 lecture slides, 312 practice problems with solutions, 156 worked proof templates, and 89 complexity worksheets. AlgoRAG incorporates domain-specific optimizations including mathematical entity recognition, notation-aware retrieval, and pedagogical re-ranking. We evaluate AlgoRAG on 179 curated exam-style questions spanning asymptotic analysis, recurrence relations, dynamic programming, graph algorithms, NP-completeness, sorting, and divide-and-conquer. The system achieves a 100% success rate with a mean response time of 38.0 seconds. While BLEU-4 scores are zero -- a known limitation of n-gram matching on mathematical proofs where equivalent reasoning may use entirely different notation -- AlgoRAG attains ROUGE-1 F1 of 0.0963, ROUGE-L F1 of 0.0683, and a pedagogical quality score of 0.7620, indicating that responses are well-structured and didactically sound even when surface wording diverges from reference answers. Performance is especially strong on NP-completeness (ROUGE-1 F1 = 0.1285, pedagogical quality = 0.7643) and graph algorithms (ROUGE-1 F1 = 0.1023, pedagogical quality = 0.8086). These results support the conclusion that RAG is an effective architecture for personalized theoretical-CS instruction, providing correct, context-rich explanations even for highly abstract topics.",
    "published": "2026-09-13T14:58:56Z",
    "updated": "2026-09-13T14:58:56Z",
    "categories": [
      "cs.CY",
      "cs.AI",
      "cs.IR",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2609.14572"
  },
  {
    "id": "2609.14570",
    "title": "Disentangling Topology and Diversity in Multi-Agent LLMs for Multilingual Low-Resource Emotion Detection",
    "authors": [
      "Ulugbek Shernazarov",
      "Charitha Ruwansiri Weerakon Basnayake",
      "Abdelkhaleq El Jarjini",
      "Noel Crespi",
      "Praboda Rajapaksha"
    ],
    "abstract": "Multi-agent LLM systems combine multiple inference calls, but prior work often confounds how calls are connected with how they are diversified. We study these factors independently: inference topology and source of inter-agent diversity. In a controlled $2 \\times 3$ matrix, we cross parallel aggregation and sequential refinement with stochastic sampling, role prompting, and learned QLoRA specialization, under a fixed three-call budget and output protocol within each backbone. Using Qwen2.5-14B-Instruct and Llama-3.1-8B-Instruct, we evaluate all six configurations on multilingual low-resource emotion detection across nine languages. Parallel learned specialization is strongest on Qwen at 52.83 Macro-F1 and reaches 52.94 on Llama. On Qwen it also exceeds same-backbone zero-shot, few-shot, CoT, and seven-call self-consistency baselines. The preferred topology depends on diversity source: sequential refinement helps stochastic and prompted settings, while the learned Width advantage shrinks from 2.83 points on Qwen to 0.17 on Llama. Depth-wise analysis suggests that later learned specialists can overwrite correct early predictions, although the aggregate effect is backbone-dependent. Overall, how agents are differentiated produces larger performance shifts than topology, which should be evaluated jointly with specialization.",
    "published": "2026-09-13T14:58:26Z",
    "updated": "2026-09-13T14:58:26Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.14570"
  },
  {
    "id": "2609.14560",
    "title": "Small Object Detection in Drone Aerial Imagery with LAF-YOLOv10",
    "authors": [
      "Quratulain Nayeem",
      "Fahmina Taranum",
      "Mohammed Mudassir Uddin"
    ],
    "abstract": "General-purpose object detectors lose accuracy on UAV footage, where targets span only a handful of pixels and onboard compute is limited. Prior work composes independently-validated architectural techniques into one detector, assuming gains reported in isolation transfer once combined. We stress-test that assumption directly. LAF-YOLOv10 integrates four techniques into YOLOv10n: a Partial Convolution C2f (PC-C2f) backbone block, an Attention-Guided Feature Pyramid Network (AG-FPN), a P2 detection head replacing the large-object P5 head, and Wise-IoU v3 regression, asking whether their combined effect matches what each contributes alone. We train LAF-YOLOv10 three times (seeds 42, 123, 256) on VisDrone-DET2019, benchmark against unmodified YOLOv10n, and use TIDE error decomposition, per-category breakdown, per-component ablation, attention/loss comparisons, zero-shot transfer to UAVDT, and held-out/test-dev evaluation to localize where the combination succeeds or fails. Composability does not hold here. LAF-YOLOv10 reaches 24.0+/-0.4% mAP@0.5 at 2.14M parameters, 7.8 points below YOLOv10n (31.8%), a deficit that transfers to UAVDT (-10.0 points) and is confirmed by held-out and test-dev evaluation (23.5%, 22.5%). Background false positives, localization error, and duplicate detections move in the direction AG-FPN and Wise-IoU were designed to push. Ablation traces the deficit to a specific source: the P2/-P5 head swap costs 2.5 points independently plus a 2.5-point interaction penalty when layered onto a backbone weakened by PC-C2f, whose own 2.0-point loss is consistent with a partial pretrained-weight transplant (73/150 backbone tensors transfer). The failure is attributable to a specific interaction, not the four components individually. Composability must be verified directly, not assumed. Code/checkpoints: https://github.com/Mudassiruddin7/Small-Object-Detection-in-UAV-Imagery.",
    "published": "2026-09-13T14:46:43Z",
    "updated": "2026-09-13T14:46:43Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.14560"
  },
  {
    "id": "2609.16069",
    "title": "Beyond Distribution Matching: Semantics-Consistent Tabular Diffusion with Weak Semantic Priors",
    "authors": [
      "Yili Wang",
      "Ruxue Shi",
      "Mengnan Du",
      "Hangting Ye",
      "Yi Chang",
      "Xin Wang"
    ],
    "abstract": "Synthetic tabular data can match real data distributions while still violating the semantic constraints that govern valid tabular rows. This reveals a key limitation of existing tabular generators: they mainly optimize distributional fidelity, but do not explicitly model weak semantic priors encoded in tabular schema and textual descriptions. In this paper, we propose \\ours, a semantics-consistent tabular diffusion framework for high-fidelity synthetic data generation under weakly specified semantic priors. \\ours\\ first constructs two types of priors, namely intra-column semantics and inter-column symbolic rules, with LLM-assisted extraction from metadata and validation on the real training split. These priors are then used as generation conditions rather than post-hoc filters. Specifically, \\ours\\ maps heterogeneous column values, column identities, and semantic priors into a unified semantic space, and performs column-wise forward corruption and prior-conditioned reverse denoising to preserve both marginal distributions and rule-consistent cross-column dependencies. Extensive experiments on six real-world tabular benchmarks show that \\ours\\ consistently improves distributional fidelity, semantic consistency, and downstream task utility over representative VAE-, GAN-, LLM-, and diffusion-based baselines. Additional analyses further demonstrate the robustness of \\ours\\ when semantic priors are partially unavailable.",
    "published": "2026-09-13T14:42:10Z",
    "updated": "2026-09-13T14:42:10Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.16069"
  },
  {
    "id": "2609.12890",
    "title": "Large Distant Gradients Need Not Be Reliable: reliability-weighted credit assignment for long-horizon autoregressive forecasting",
    "authors": [
      "Junhao Zhao",
      "David Michael Simberg",
      "Jacob Kang",
      "Colin Connor Kurniawan",
      "Nan Xu"
    ],
    "abstract": "In autoregressive forecasting, long prediction rollouts provide distant supervision, but backpropagation through time (BPTT) carries gradients from those losses through many autoregressive steps. Repeated Jacobian products can make distant gradients dominate the update while amplifying predictable signal and unpredictable noise together; a large distant gradient therefore need not carry reliable learning signal. Motivated by this observation, we introduce Internal Dual-Wiener routing (Internal-DW), a principled backward-only intervention that preserves the full forward rollout and all horizon losses while reliability-weighting internal gradient routes. At each residual block, we derive bounded Wiener gains for the identity and nonlinear routes that balance preserving predictable learning signal against suppressing unpredictable variation, and estimate them from route-level gradient statistics and an explicit noise model. In a controlled system with known gradient signal-to-noise ratio (SNR), we show that distant gradients can grow even as their SNR falls, and that Internal-DW reduces held-out error in recovering predictable gradient signals and improves forecasting. On four history-dominated, weak-drive testbeds, Internal-DW reduces forecast error by 5.2%-13.8% relative to full BPTT, outperforms gradient clipping and Jacobian regularization on all four, and outperforms validation-selected truncated BPTT (TBPTT) on three. It also extends or preserves the fitted optimal training-horizon range across these four testbeds. Across the full benchmark suite, the current Internal-DW estimator has a clear applicability boundary: its benefit diminishes or reverses when usable history is limited or when the selected sampler fails to represent dominant drive-dependent variation. The results show that retaining long-horizon supervision does not require trusting every backward contribution equally.",
    "published": "2026-09-11T14:18:59Z",
    "updated": "2026-09-11T14:18:59Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.12890"
  },
  {
    "id": "2609.12885",
    "title": "Learning Sign Language Recognition under Label Noise: A Study of Noise-Robust Losses for Isolated and Continuous Settings",
    "authors": [
      "Akihisa Shitara",
      "Yoichi Ochiai"
    ],
    "abstract": "In sign language recognition, the isolated (ISLR) classification loss treats a single label as ground truth, as does the frame-level auxiliary classifier over pseudo-labels we add to continuous (CSLR) methods, which lack one. Stylistic variation blurs ISLR annotation and the lack of temporal boundaries in CSLR forces pseudo-labels; both are noisy. We therefore apply symmetric and generalized cross entropy (SCE, GCE), robust alternatives to cross entropy (CE) from image classification, not to connectionist temporal classification but to the preceding single-label classifier. On ASL Citizen with injected symmetric noise on three backbones (three seeds for ST-GCN), robust losses cost at most 2.5 pt when labels are clean and beat CE by 2.9-10.0 pt in all six conditions at noise rate 0.2, one of which only after q was re-selected on dev. GCE gains more, but its optimal q does not transfer across backbones, whereas one SCE setting works in all nine conditions; both vary 2-11 times more than CE across runs, so a favorable point estimate does not establish stability. For CSLR (PHOENIX-2014) we report no gain; our frame-level targets carry a systematic assignment bias, making that study a diagnosis of a single configuration. At lambda_aux = 25 the pseudo-label CE auxiliary raises word error rate above the no-auxiliary baseline on VAC, CorrNet and SlowFastSign, and GCE/SCE improve on CE by 1.7-3.2 pt (three of six conditions return below that baseline). However, the three losses differ by more than an order of magnitude in effective gradient at a common lambda_aux: matching the initial gradient shrinks the gap to 0.4-0.9 pt, and lowering the CE weight alone already beats that baseline, so neither the degradation nor the improvement can be separated from the effect of the weight. We use only symmetric noise; multi-seed evaluation covers only ST-GCN and VAC isolated.",
    "published": "2026-09-11T14:11:20Z",
    "updated": "2026-09-11T14:11:20Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.12885"
  },
  {
    "id": "2609.12874",
    "title": "VideoTok4D: A 4D-Aware Video Tokenizer for Compact World Representation",
    "authors": [
      "Xinyi Chen",
      "Hanxin Zhu",
      "Xijun Wang",
      "Xingrui Wang",
      "Sen Liang",
      "Xin Li",
      "Zhibo Chen"
    ],
    "abstract": "Video tokenizers have emerged as a cornerstone of modern video modeling, underpinning progress in compression, reconstruction and generation by mapping high-dimensional visual signals into compact latent spaces. However, despite this progress, current tokenization paradigms largely remain within the 2D visual domain, treating videos as image sequences rather than observations of an underlying dynamic 3D world. Consequently, the learned tokens inherit this observation-centric bias, limiting their capacity to compactly represent real-world 4D scenes. To mitigate this issue, we propose VideoTok4D, a novel 4D-aware video tokenizer for compact world representation. Specifically, our approach comprises three key designs: 1) a spatiotemporal disentanglement strategy that factorizes videos into static and dynamic tokens for holistic world modeling; 2) a track-aware dynamic attention mechanism that aggregates trajectory-aligned cues to promote cross-view motion consistency; and 3) Co4DGen, a diffusion prior learned over the resulting VideoTok4D token space for efficient 4D scene generation. Extensive experiments have demonstrated that our proposed method achieves state-of-the-art performance while requiring up to 4 orders of magnitude less storage than dense 4D representations. Moreover, the compact token space substantially shortens diffusion sequences, enabling efficient generation.",
    "published": "2026-09-11T14:03:02Z",
    "updated": "2026-09-11T14:03:02Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.12874"
  },
  {
    "id": "2609.12871",
    "title": "A Multi-Vehicle Dataset with Camera, LiDAR, and Radar Sensors and Scanned 3D Models for Custom Auto-Annotation using RTK-GNSS",
    "authors": [
      "Philipp Berthold",
      "Bianca Forkel",
      "Mirko Maehlisch"
    ],
    "abstract": "Datasets are a crucial element in the development of perception algorithms. They relate sensor measurement data to annotated reference information and allow for the deduction of sensor and object characteristics. In autonomous driving, the reference data commonly consist of semantic image segmentation, point-wise associations, or bounding box annotations. The dataset proposed in this work, however, aims to dig deeper into the evaluation of measurement principles and provides scanned 3D models of all vehicles together with a pose and continuous kinematics reference obtained by RTK-GNSS. Combined, the state of the complete dynamic surrounding of the sensor vehicle is known for any point in time. Subsequent reference formats can be easily computed in user-defined granularity. This dataset involves single-object and multi-object recordings with seven target vehicles. In particular, measurement effects such as occlusion, as well as reflections, can be evaluated, as the normals of the shape of the target vehicles are known. We describe the dataset, discuss the technical background of its development, and briefly present exemplary evaluations.",
    "published": "2026-09-11T13:55:30Z",
    "updated": "2026-09-11T13:55:30Z",
    "categories": [
      "cs.RO",
      "cs.AI",
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2609.12871"
  },
  {
    "id": "2609.12860",
    "title": "3D CT-to-PET Translation via Latent Brownian Bridge Diffusion",
    "authors": [
      "Sarita Mourya",
      "Francesco Di Feola",
      "Pierangelo Veltri",
      "Paolo Soda"
    ],
    "abstract": "Computed tomography (CT) and positron emission tomography (PET) provide complementary anatomical and functional information for cancer diagnosis and treatment planning. However, the widespread use of PET is limited by high radiation exposure, elevated costs, and restricted availability. To address these limitations, deep learning-based CT-to-PET translation has emerged as a promising approach for synthesizing PET-like information directly from CT images, although accurately modeling the large cross-modal gap remains challenging. In this work, we propose a 3D CT-to-PET translation framework based on latent Brownian Bridge Diffusion (BBDM). The method consists of two stages. First, a Variational Autoencoder (VAE) is trained on paired CT-PET patches, integrating contrastive learning to improve latent alignment between anatomical and metabolic representations. Second, a BBDM is trained in the latent space to translate CT latent representations into their corresponding PET counterparts. The translated PET latents are then decoded and stitched to reconstruct the final 3D PET volume. We evaluate the proposed approach on two publicly available datasets. Quantitative results based on image fidelity and lesion-level PET-specific metrics demonstrate improved performance compared with competing methods. In particular, the proposed approach improves PET signal fidelity, better preserves clinically relevant uptake patterns, and shows improved performance in preserving small-lesion metabolic activation, paving the way for virtual imaging applications.",
    "published": "2026-09-11T13:47:50Z",
    "updated": "2026-09-11T13:47:50Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.12860"
  },
  {
    "id": "2609.12851",
    "title": "MedRoundsQA: A Persona and Difficulty Aware Evaluation for Multi-Turn Medical Consultations",
    "authors": [
      "Youssef Mohamed",
      "Ahmed Heakl",
      "Qinrong Cui",
      "Junhong Liang",
      "Rafiq Ali",
      "Bdour Babillie",
      "Nazira Dunbayeva",
      "Lang Gao",
      "Omar Hussein",
      "Ahmed Nada",
      "Ahmed Mohamed Magdy Mohamed",
      "Jinghui Liu",
      "Salman Khan",
      "Imran Razzak",
      "Yuxia Wang",
      "Xiuying Chen"
    ],
    "abstract": "Medical benchmarks are dominated by single-turn, multiple-choice clinical cases that poorly reflect real consultations. Practically, clinicians elicit evidence interactively and patient communication varies widely. We introduce MedRoundsQA, a multi-turn diagnostic benchmark derived from 1,387 board-exam cases across 17 specialties. Each case is converted into a structured 24-slot clinical record, and then instantiated as controlled doctor-patient dual-agent dialogues under varying patient personas, with the underlying clinical content held fixed. We further classify cases by difficulty using model-based uncertainty to enable easy-to-hard analysis. Evaluations of fifteen LLM doctor agents show that (i) moving from a single-turn diagnosis on the standardized records to multi-turn consultations causes large degradations of roughly 13-39 points; (ii) more turns reliably improves question relevance, but diagnostic accuracy exhibits diminishing returns and typically plateaus after 6-12 turns; and (iii) patient persona differences can shift diagnosis accuracy by about 7-8 points (lowest to highest education), highlighting equity risks that single-turn benchmarks miss.",
    "published": "2026-09-11T13:41:53Z",
    "updated": "2026-09-11T13:41:53Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.12851"
  },
  {
    "id": "2609.12850",
    "title": "MGAvatar: Mesh-Bound Gaussians for Head Avatar Geometry and Appearance Modeling",
    "authors": [
      "Lei Shi",
      "Sen Peng",
      "Zhiyang Deng",
      "Zhonggui Chen",
      "Xiaohu Guo",
      "Baorong Yang",
      "Xiao Dong"
    ],
    "abstract": "Accurate head modeling requires a stable yet expressive geometric representation. Existing Gaussian-based head avatars commonly rely on parametric templates (e.g., FLAME) for Gaussian initialization and deformation, but these templates lack personalized priors and struggle to represent structures such as hair and clothing. To address this issue, we propose MGAvatar, a Gaussian-mesh hybrid representation that jointly models geometry and appearance through two Gaussian-mesh binding modes. Specifically, we introduce vertex-bound Gaussians and constrain their learnable parameters, enabling progressive mesh deformation to represent complex head geometry, while a pose-dependent offset module accounts for non-rigid deformations. Once geometry is stabilized, MGAvatar switches to face-bound Gaussians for appearance modeling. To improve appearance consistency across novel poses and viewpoints, we introduce a view-conditioned neural color field that alleviates artifacts caused by independently optimized Gaussian colors. In addition, we design a Gaussian offset network to predict Gaussian offset maps in the observation space, providing greater flexibility for face-bound Gaussians to capture dynamic facial textures. Extensive experiments on multi-view and monocular videos show that MGAvatar outperforms existing methods in rendering quality, producing high-fidelity head avatars with rich texture details.",
    "published": "2026-09-11T13:41:06Z",
    "updated": "2026-09-14T11:23:47Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.12850"
  },
  {
    "id": "2609.12843",
    "title": "Pre-Trained Low-Rank Tensor Decomposition for Multi-Dimensional Image Recovery",
    "authors": [
      "Bing-Zhang Fu",
      "Zhi-Long Han",
      "Ting-Zhu Huang",
      "Xi-Le Zhao",
      "Deyu Meng"
    ],
    "abstract": "Recently, tensor decompositions are prevalent for multi-dimensional image representation, which learn the instance-specific structure of each image from scratch. However, tensor decompositions neglect the common structure across different images, leading to limited semantic modeling capability, high computational cost, and a large number of learnable parameters. To address this challenge, we suggest the first pre-trained low-rank tensor decomposition (PLTD) framework, which organically integrates the pre-trained large vision model into the classical tensor decomposition framework. Beyond the shallow and untrained deep tensor decomposition, the suggested PLTD achieves an unprecedented balance among higher recovery fidelity, fewer learnable parameters, and smaller carbon footprint. Specifically, PLTD factorizes the target tensor into a latent tensor and a learnable transform that maps the latent tensor back to the original data domain. The latent tensor consists of two indispensable and complementary terms, i.e., a fixed pre-trained latent tensor and a learnable low-rank latent tensor. The fixed pre-trained latent tensor is distilled from a pre-trained large vision model (i.e., DINOv3) to capture the common structure of the target tensor, while the learnable low-rank latent tensor characterizes the instance-specific structure of the target tensor. To examine the potential of PLTD, we develop the corresponding multi-dimensional image recovery model and theoretically justify the advantages of this framework. Additionally, we discuss the connections between PLTD and classical tensor decomposition frameworks. Extensive experiments on multi-dimensional image recovery demonstrate that PLTD consistently achieves superior performance compared with state-of-the-art methods.",
    "published": "2026-09-11T13:36:36Z",
    "updated": "2026-09-11T13:36:36Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.12843"
  },
  {
    "id": "2609.12841",
    "title": "A Graph-Based Approach for Mapping Kernel-Level Telemetry to MITRE ATT&CK",
    "authors": [
      "Matteo Lupinacci",
      "Luigi Arena",
      "Francesco Blefari",
      "Angelo Furfaro"
    ],
    "abstract": "Mapping observed system behavior to standardized frameworks like MITRE ATT&CK is essential for threat-informed defense, but remains largely manual. Existing automated methods depend on Cyber Threat Intelligence reports, which offer only retrospective accounts of attacks. Low-level telemetry, i.e. kernel-level system calls, instead provides evidence of adversary behavior, yet its volume and complexity have limited its use for automated mapping. We present a methodology that collects kernel-level events via eBPF, correlates attacker commands into a provenance graph, and derives compact graph representations suitable for LLM-based reasoning. These representations are mapped to the MITRE ATT&CK framework using both pure LLM prompting and retrieval-augmented generation (RAG) grounded in the ATT&CK knowledge base, producing ranked technique candidates along with supporting rationales. We implement this methodology as an end-to-end pipeline, named Trace2ATT&CK and evaluate it on 347 Linux Atomic Red Team tests using locally deployed open-weights LLMs. RAG consistently improves ATT&CK mapping performance over pure prompting, while provenance graph substantially outperforms raw telemetry. These results show that local inference over graph-based behavioral descriptions can make automated ATT&CK mapping from kernel-level telemetry operationally viable, without compromising data confidentiality.",
    "published": "2026-09-11T13:35:27Z",
    "updated": "2026-09-11T13:35:27Z",
    "categories": [
      "cs.CR",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.12841"
  },
  {
    "id": "2609.12839",
    "title": "Evaluating Context Segmentation in Locally Deployable SLMs for Cybersecurity CTF Tasks",
    "authors": [
      "Sebastiano Nordio",
      "Michele Lotto"
    ],
    "abstract": "The proliferation of highly capable open-weight Small Language Models (SLMs) democratizes access to advanced cybersecurity capabilities, posing a escalating risk as these models can bypass proprietary API guardrails when deployed locally. However, SLMs deployed as autonomous agents often struggle with long-horizon, exploratory tasks like cybersecurity Capture The Flag (CTF) challenges due to context bloat and cognitive degradation from accumulated tool-call outputs. To understand and mitigate this cybersecurity threat, we introduce context segmentation, a two-level agentic framework that divides complex exploitation tasks into manageable, contextually isolated sub-problems. Evaluating on the picoCTF dataset using memory-constrained gemma-4 models, we demonstrate that for the E4B model, our strategy acts as an intelligent search, achieving competitive rewards with superior token efficiency compared to brute-force retries, and successfully solving 18.52% of tasks that standard agentic execution fails to complete. Code is available at https://github.com/9xeb/context-segmentation.",
    "published": "2026-09-11T13:34:48Z",
    "updated": "2026-09-14T16:33:10Z",
    "categories": [
      "cs.CR",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.12839"
  },
  {
    "id": "2609.12835",
    "title": "HemaHier: Chain-Conditioned Ordinal Hierarchies for Lineage-Aware Bone-Marrow Cytology",
    "authors": [
      "Afshin Bozorgpour",
      "Peter Schüffler",
      "Edgar Jost",
      "Dorit Merhof"
    ],
    "abstract": "Bone-marrow cytology is inherently structured: each cell belongs to a hematopoietic lineage, and many cell types lie on ordered maturation trajectories. Standard flat classifiers ignore this structure, treating a mild same-lineage confusion the same as a severe cross-lineage mistake and predicting only discrete labels. We propose HemaHier, an ordinal-hierarchical prediction head for a frozen or lightly adapted cytology foundation model. Its central component is a chain-conditioned maturity score that reads a single maturity value under a per-chain query, supervised only on biologically valid healthy chains, while dysplastic and off-chain cell types remain classes but are excluded from maturity supervision. Fine and lineage predictions are coupled through a shared posterior that guarantees hierarchical consistency, and a staged objective first stabilizes recognition, then adds lineage and maturity supervision. On three bone-marrow datasets under a shared ontology, HemaHier achieves competitive recognition while reducing biologically severe errors and adding a within-lineage maturity ordering that flat classifiers lack. Code is available at https://github.com/xmindflow/HemaHier.",
    "published": "2026-09-11T13:30:20Z",
    "updated": "2026-09-11T13:30:20Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.12835"
  },
  {
    "id": "2609.12834",
    "title": "Self-supervised Pre-training Helps Retinal Disease Progression Modelling Most When Data Is Scarce",
    "authors": [
      "Ifeoma Veronica Nwabufo",
      "Julius Gervelmeyer",
      "Sarah Müller",
      "Philipp Berens"
    ],
    "abstract": "Modelling how a disease progresses over time requires longitudinal imaging cohorts, which are scarce and small, whereas cross-sectional data -- one image per participant -- is abundant. Self-supervised pre-training on such data offers a way to bridge this gap, but it is unclear which strategy best supports progression modelling, or how that answer depends on the amount of labelled longitudinal data. We study this for age-related macular degeneration (AMD), pre-training encoders on the large cross-sectional NAKO cohort and predicting time to late AMD on the longitudinal AREDS dataset. We compare in-house self-supervised encoders against a general-purpose (DINOv2) and a domain-specific (RETFound) foundation model, across contrastive, masked-autoencoding, and self-distillation objectives, under frozen and fine-tuned protocols, and across labelled training sets from 100 to 32,250 examples. Which model performs best depends on how the encoder is used. When the encoder is frozen and labels are few -- the regime typical of longitudinal cohorts -- pre-trained representations reach clinically reasonable discrimination from a few hundred labelled samples, while models trained from scratch do not; this advantage fades under fine-tuning. Transfer is governed by the self-supervision objective rather than corpus scale or domain match, so that an encoder pre-trained on a modest cross-sectional cohort matches or exceeds a far larger in-domain foundation model. Together, these results offer a practical recipe for building progression models where longitudinal data is scarce: a frozen self-supervised encoder with a lightweight survival head.",
    "published": "2026-09-11T13:28:36Z",
    "updated": "2026-09-11T13:28:36Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.12834"
  },
  {
    "id": "2609.11739",
    "title": "LOCUS: Task-Aware Low-Rank Post-Training for Token-Efficient Language Generation",
    "authors": [
      "Dongfang Zhao"
    ],
    "abstract": "Large language model serving costs scale directly with output sequence length, yet standard preference alignment often inflates response verbosity without improving utility. We study whether the parameterization of post-training updates affects generation length: low-rank subspaces alter sequence length without modifying the alignment loss. We present LOCUS, a method that selects a task-aware low-rank adaptation subspace to minimize output-token cost subject to a utility constraint. Within this subspace, post-training retains the native preference objective with a frozen backbone. Across Anthropic HH-RLHF dialogue preferences, we evaluate two $\\sim$3B decoder backbones, Pythia-2.8B and Qwen2.5-3B, against protocol-matched full-parameter DPO and DrDPO branches and the released SamPO checkpoint. LOCUS reduces continuation length by up to 39.84\\% on Pythia-2.8B and by 14.87--17.58\\% on Qwen2.5-3B while updating only 0.24--0.28\\% of model parameters, with no material change in the internal preference diagnostic.",
    "published": "2026-09-10T15:53:25Z",
    "updated": "2026-09-10T15:53:25Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2609.11739"
  },
  {
    "id": "2609.11737",
    "title": "ORCH: Organizational Principles Enable Collective Intelligence in Embodied AI",
    "authors": [
      "Zhengran Ji",
      "Jonathan Hyun",
      "Boyuan Chen"
    ],
    "abstract": "Collective intelligence depends not only on the capabilities of individual members, but also on how those members are organized. Yet artificial multi-agent systems are typically assembled using fixed organizational structures, even when the physical tasks they perform impose fundamentally different coordination requirements. Here we show that principles from human organization theory can be operationalized to organize large, heterogeneous collectives of embodied artificial agents. We introduce ORCH (Organizing Roles and Coordination Hierarchies), which constructs task-specific hierarchical organizations by combining pooled interdependence for work that can proceed concurrently with sequential interdependence for work governed by prerequisite relationships. Across 25 wildfire-response missions spanning reconnaissance, rescue, transportation, resource management, containment and suppression, we evaluated teams of up to 50 heterogeneous agents using eight large language models. Organizations constructed using these principles consistently outperformed four representative embodied multi-agent approaches across mission outcome, execution efficiency, exploration and computational resource use. Human-designed ORCH organizations improved final score by 63.97% and execution efficiency by 74.29% on average relative to the four prior frameworks. Organizations generated automatically by language models improved these measures by 43.63% and 52.53%, respectively. These advantages persisted across missions and underlying language models. Notably, collective performance was not monotonically determined by model scale. Analysis of long-horizon missions showed that hierarchical organization enabled teams to preserve concurrent activity within specialized groups while coordinating ordered transitions between mission phases.",
    "published": "2026-09-10T15:52:35Z",
    "updated": "2026-09-10T15:52:35Z",
    "categories": [
      "cs.MA",
      "cs.AI",
      "cs.LG",
      "cs.RO"
    ],
    "url": "https://arxiv.org/abs/2609.11737"
  },
  {
    "id": "2609.11725",
    "title": "Continuous-Time Acoustic Modelling with Neural Controlled Differential Equations",
    "authors": [
      "Mattias Cross",
      "Minghui Zhao",
      "Anton Ragni"
    ],
    "abstract": "Text-to-speech (TTS) models commonly address text--speech alignment by expanding phone-level encoder states to frame-level decoder inputs using predicted durations. While this length-regulation step resolves alignment structurally, this use of duration typically changes only where and how often latent states appear, not the values of the states themselves. This paper proposes a continuous-time mechanism for duration-aware acoustic modelling in TTS using neural controlled differential equations (CDEs). We formulate the phone representation as a temporally parameterised control path and use a neural acoustic vector field to produce a continuous-time hidden state whose values evolve with phonetic content and duration-derived timing. The resulting trajectory can be sampled at discrete points and integrated into a standard acoustic decoder pipeline. Objective results contrast CDEs and typical recurrent models. Subjective results suggest that CDE-based models evaluating one phone per step can improve rank-order agreement between synthesised and reference emotion intensity while maintaining comparable emotion-expression quality to a strong baseline. Additional experiments with half-phone step-sizes suggest that temporal resolution changes the trade-off between style tracking and absolute calibration. These results position CDEs as a promising design space for continuous-time and duration-aware style-sensitive TTS.",
    "published": "2026-09-10T15:41:32Z",
    "updated": "2026-09-10T15:41:32Z",
    "categories": [
      "cs.SD",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.11725"
  },
  {
    "id": "2609.11477",
    "title": "Pre- and Post-Treatment Brain Metastases Segmentation Using nnU-Net with Post-Processing for BraTS 2026",
    "authors": [
      "Haobin Liu",
      "Xin Wang"
    ],
    "abstract": "Brain metastases exhibit high inter-lesion variability in size, enhancement pattern, and post-treatment appearance, making volumetric segmentation of both pre- and post-treatment cases the central challenge of the BraTS 2026 Task 1 (Brain Metastases). We build a pragmatic pipeline on a 5-fold nnU-Net ResEnc-L ensemble, in which each fold is trained independently for 1,000 epochs with the standard Dice + cross-entropy loss on 1,296 four-modality training cases. This ensemble is followed by a rule-based post-processing cascade tuned for the lesion-wise Dice similarity coefficient (LW-DSC), a detection-oriented metric that behaves very differently from the traditional global Dice. The final pipeline reaches an LW-DSC of 0.733 / 0.751 / 0.713 / 0.549 on the enhancing tumour (ET), tumour core (TC), whole tumour (WT), and resection cavity (RC) sub-regions on the official validation leaderboard. Rather than trusting these leaderboard gains, we audit every post-processing stage with a five-fold out-of-fold (OOF) analysis with no model-training leakage over all 1,296 training cases, scored with the official BraTS evaluation code (BraTS_evaluation): it confirms two stages as robust, per-fold-consistent improvements while the third improves only the leaderboard and does not reproduce out-of-fold. We further provide a mechanistic analysis of the LW-DSC metric that explains why recall-recovering post-processing carries low risk whereas component deletion does not, and we report thirteen negative results spanning loss engineering, alternative backbones, and inference-time settings, several of which run counter to widely held intuitions. Source code is released under Apache-2.0 at https://github.com/hornbeamliu/brats2026-met.",
    "published": "2026-09-10T12:43:04Z",
    "updated": "2026-09-10T12:43:04Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.11477"
  },
  {
    "id": "2609.11472",
    "title": "BridgeMatch: Conditional Transport Bridges in Matching Matrix Space for 3D Deformable Registration",
    "authors": [
      "Qianliang Wu",
      "Haobo Jiang",
      "Guangwei Gao",
      "Shuo Chen",
      "Jin Xie",
      "Jian Yang",
      "Yaqing Ding"
    ],
    "abstract": "Reliable non-rigid point cloud correspondences are important for deformable anatomical registration, embodied perception and manipulation, and dynamic 3D reconstruction. Coarse-to-fine methods reduce computational cost by selecting the top-\\(K\\) coarse regions. However, this pruning may remove weak but correct hypotheses and restrict fine matching to an incomplete search space. We present \\paper, a two-stage generative solver that maintains the complete soft matching matrix at both coarse and high resolutions. Stage~I uses denoising diffusion to estimate a global matching matrix in the compact coarse-resolution space. We then lift this matrix to high resolution while preserving its hierarchy. The lifted matrix is rank-bounded and block-constant. Stage~II refines it through a conditional transport bridge. We implement the bridge with two types of dynamics: a deterministic endpoint-parameterized conditional Flow Matching (CFM) ODE and a stochastic Brownian-bridge SDE inspired by Schrödinger bridges. Both variants share the lifted source, a time-conditioned transformer, and a matching-matrix endpoint predictor. Experiments on 4DMatch and 4DLoMatch show that both variants produce more accurate correspondences than the compared methods and improve downstream registration, with larger gains in low-overlap cases. They also improve cross-dataset generalization on CAPE and DeepDeform without target-domain adaptation while using the same deformation solver.",
    "published": "2026-09-10T12:39:58Z",
    "updated": "2026-09-10T12:39:58Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.11472"
  },
  {
    "id": "2609.11463",
    "title": "BruNet: A Cross-Domain Transfer Framework for Bruise Segmentation",
    "authors": [
      "Qiming Wang",
      "Richard J. Motley",
      "Ebube E. Obi",
      "Xianfang Sun",
      "Paul L. Rosin"
    ],
    "abstract": "Segmenting bruises is a challenging task in medical imaging due to limited data and annotations, diffuse boundaries, and highly variable appearance. In this work, we propose BruNet, a segmentation framework that combines a ViT-based visual encoder (a self-supervised DINOv3 or a pretrained LingBot-Vision backbone) with a SAM-based mask decoder. BruNet is trained on the HAM10000 skin lesion dataset and evaluated on a separate bruise dataset without additional fine-tuning. Although a small number of prior studies have explored machine learning and computer vision for bruise analysis, existing work has primarily focused on detection, classification, or colour analysis rather than pixel-level localisation. To the best of our knowledge, this is the first study to address automatic bruise segmentation. Our results show that BruNet outperforms CNN-based models, state-of-the-art segmentation models, ChatGPT-4o/5-assisted SAM2 zero-shot baselines, and the medical-oriented MedSAM model, demonstrating strong cross-domain generalisation to bruise segmentation.",
    "published": "2026-09-10T12:35:20Z",
    "updated": "2026-09-10T12:35:20Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.11463"
  },
  {
    "id": "2609.11458",
    "title": "Flexible and Interpretable Accent Distance Measurements",
    "authors": [
      "Charles McGhee",
      "Mark J. F. Gales",
      "Kate M. Knill"
    ],
    "abstract": "Determining the differences between two speakers' accents is a fundamental task in linguistics and speech technology research. The methodology used to measure these differences depends on the specific research area. A phonetics researcher may demonstrate accent variation by comparing vowel formants in paired recordings of individual words. These results will be interpretable, but the recordings will be time-consuming to collect and may not be representative of connected speech. Accented Text-to-Speech (TTS) research has pushed towards using accent embeddings derived from accent classification tasks. These embeddings can be produced from any speech recording, but are not readily interpretable. In this paper, we demonstrate that articulatory representations created through articulatory inversion can be used as an interpretable basis for accent comparison and that optimal transport provides a framework for accent comparison across arbitrary recording types.",
    "published": "2026-09-10T12:32:13Z",
    "updated": "2026-09-10T12:32:13Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.11458"
  },
  {
    "id": "2609.11452",
    "title": "RouteRepair: Instance-Level Failure Diagnosis and Targeted Repair in LLM-Based Automated Heuristic Design for Routing Optimization",
    "authors": [
      "Binghao Ji",
      "Di Huang",
      "Jiahui Fang",
      "Zhiyuan Liu"
    ],
    "abstract": "Efficient routing optimization is essential to freight transportation, urban logistics, and shared mobility, where high-quality heuristics are often required under limited computational budgets. Recent large language model (LLM)-based automated heuristic design methods can generate effective routing rules, but aggregate evaluation may mask recurrent failures on particular instance structures. To address this limitation, this study develops RouteRepair, which diagnoses parent-specific weaknesses from instance-level performance and applies targeted modifications to the corresponding heuristic components while protecting behavior that already performs well. Routing evidence, solver behavior, and program context are combined to define bounded repair objectives, and each intervention is validated through matched parent-child evaluation of failure recovery and collateral degradation. Experiments on the traveling salesman problem (TSP) and capacitated vehicle routing problem (CVRP) span constructive search, guided local search, and ant colony optimization. RouteRepair-GLS reduces the mean TSP optimality gap from 1.7476% to 0.7587%, while the constructive CVRP heuristic lowers average route cost by 1.91% relative to the savings heuristic; the generated ACO priors also outperform matched hand-designed priors. These results show that failure-aware, evidence-constrained refinement can improve routing heuristics on difficult instances while preserving performance on cases they already solve well.",
    "published": "2026-09-10T12:21:18Z",
    "updated": "2026-09-10T12:21:18Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.11452"
  },
  {
    "id": "2609.11450",
    "title": "Cross-Lingual Clinical Annotation Projection as Constrained Text Generation: A Six-Language Study",
    "authors": [
      "Álvaro Rey-Blanes",
      "Francisco J. Moreno-Barea",
      "Francisco J. Veredas"
    ],
    "abstract": "Background: To determine whether cross-lingual clinical annotation projection can be formulated as a text-preserving, document-level generative task that produces verifiable character-level annotations for multilingual clinical corpus construction, and to characterize its robustness and computational trade-offs relative to candidate-based projection pipelines. Methods: We developed a constrained LLM projection workflow that inserts entity tags directly into immutable target-language text, followed by deterministic validation and character-offset reconstruction. We evaluated it alongside supervised candidate-span projection and hybrid ML-LLM refinement for transferring Spanish Disease, Symptom, and Procedure annotations into six languages. Evaluation used MultiClinAI gold standard with strict span matching and character-overlap F1 Results: Direct LLM projection achieved the strongest and most consistent performance. GLM 5.2 obtained a mean Strict F1 of 0.9201 across 18 language-entity combinations, while locally deployable Gemma4:31B achieved 0.9133. The best LLM configuration improved Strict F1 over the previous state of the art in all 18 settings, by 0.0564-0.1512, yielding 55,416 grounded mentions with reconstructed offsets. Conclusions: Direct LLM-based projection enables high-quality multilingual clinical annotation transfer and provides a practical approach for extending clinical NLP resources to languages with fewer annotated datasets and language-specific tools. Combined with local inference and deterministic validation, it can substantially reduce expert time and cost for multilingual clinical corpus construction.",
    "published": "2026-09-10T12:17:52Z",
    "updated": "2026-09-10T12:17:52Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.11450"
  },
  {
    "id": "2609.11449",
    "title": "Prevalence Determines Precision:Silent Contamination in Detector-Defined Datasets",
    "authors": [
      "Jia Huang",
      "Yankai Wan",
      "Yangjun Ou"
    ],
    "abstract": "Many ML datasets are constructed by running a detector, heuristic, or model over candidate pools; accepted items become labels. Dataset precision is then governed by true-positive prevalence in each pool via Bayes, not solely by detector quality. Using one instrument and period, we hold a detector-defined event dataset plus an independent official index labeling every detected item as real or phantom. One detector, three pools yield phantom rates 81.7%, 9.0%, and 0.0%. Transferring precision from the two high-rate pools to the low-rate pool predicts 0.955 versus measured 0.183, a +422% error; the Bayes expression predicts all three within 3.3%. The detected response curve is an exact convex combination of a true-event and a phantom component (residual 1.1e-16), with phantoms outnumbering true events 473 to 308, so contamination is a second signal with detector-inherited shape, not additive noise. Contamination direction depends on the estimator: on identical windows one statistic is diluted and another inflated because its denominator is also contaminated. A common normalization turns the estimator into a mean of ratios whose expectation need not exist; on the same 335 events it returns 0.40 where the well-defined estimator returns 0.10.",
    "published": "2026-09-10T12:17:44Z",
    "updated": "2026-09-10T12:17:44Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.11449"
  },
  {
    "id": "2609.11447",
    "title": "Investigating catastrophic forgetting in sound event classification",
    "authors": [
      "Riccardo Casciotti",
      "Annamaria Mesaros"
    ],
    "abstract": "This work investigates a number of approaches to prevent catastrophic forgetting in class incremental learning scenarios for sound event classification tasks. We analyze the problem using architectural and regularization approaches, using FSD50K and AudioSet datasets. We design incremental stages and solutions that selectively protect the kernels of the network from weight updates to prevent catastrophic forgetting, and a dynamic head solution that expands itself each time a new task is learned. The findings show that catastrophic forgetting mainly happens in deeper layers, in particular in the classifier head. For the studied in-domain sound classification problem, the solution that seems to alleviate catastrophic forgetting and is the most efficient is a full freezing of the feature extractor with a fine-tuning of the dynamic head classifier, showing little to no forgetting and great training stability, and a good balance between memory-stability and learning plasticity.",
    "published": "2026-09-10T12:16:56Z",
    "updated": "2026-09-10T12:16:56Z",
    "categories": [
      "eess.AS",
      "cs.AI",
      "cs.SD"
    ],
    "url": "https://arxiv.org/abs/2609.11447"
  },
  {
    "id": "2609.11446",
    "title": "Calibration-Aware Uncertainty Cascades for Efficient Heterogeneous Model Collaboration",
    "authors": [
      "Yilin Zhang",
      "Han Jiang",
      "Cai Xu",
      "Ying Liu",
      "Wei Zhao"
    ],
    "abstract": "Heterogeneous model collaboration seeks to exploit the complementary strengths of different models to balance predictive performance and inference cost. Existing approaches typically rely either on trained routers, which tie routing decisions to a fixed task and model pool, or on raw-confidence cascades, whose thresholds lack consistent reliability semantics across heterogeneous models. Consequently, these approaches adapt poorly to changing model pools and deployment budgets. We propose Calibration-Aware Uncertainty Cascades (CAUC), a simple post-hoc framework that independently calibrates each model's confidence and selects deployment policies using validation data. The resulting calibrated confidence scores establish a common reliability scale for accepting an early prediction, invoking a stronger model, or selectively combining model outputs. This unified decision criterion decouples deployment policies from any particular model pool or operating budget. We further show theoretically that calibration gives confidence thresholds an explicit selective-risk interpretation, whereas uncalibrated scores offer no comparable reliability guarantee. Extensive experiments demonstrate that, across six language benchmarks, CAUC achieves an average relative accuracy improvement of 1.9% over strong-model-only inference while avoiding approximately 47% of strong-model calls. On image classification benchmarks, it maintains or improves predictive performance while reducing measured GFLOPs by up to 57%.",
    "published": "2026-09-10T12:14:54Z",
    "updated": "2026-09-10T12:14:54Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.11446"
  },
  {
    "id": "2609.10366",
    "title": "AVSRBench: A Multi-Condition AVSR Benchmark",
    "authors": [
      "Rishabh Jain",
      "Naomi Harte"
    ],
    "abstract": "While AVSR has achieved sub-1% word error rates on the standard LRS3 benchmark, its reliance on broadcast speech obscures whether this reflects true generalization or just domain adaptation. To investigate this gap, we evaluate three AVSR architectures across six conditions: controlled broadcast speech, fixed-grammar utterances, hyper-articulated Lombard speech, read speech from professional lipspeakers and non-professional speakers, and spontaneous multi-party video conversations. We find that visual-only performance deteriorates rapidly beyond broadcast domains, and audio-video fusion mainly benefits Lombard speech environments. Visual understanding degrades sharply at 90° profile views, with multimodal systems relying largely on acoustic fallback. Additionally, speaker articulation proves more critical than minor camera shifts, and LLM-based architectures suffer from poor out-of-domain generalization. Our work highlights a significant generalization gap in current AVSR research. To address this, we also introduce RoomReader-AV as a new benchmark for AVSR and release a unified data preprocessing pipeline to make comprehensive multi-condition evaluation accessible.",
    "published": "2026-09-09T15:58:44Z",
    "updated": "2026-09-09T15:58:44Z",
    "categories": [
      "eess.AS",
      "cs.CV",
      "cs.MM"
    ],
    "url": "https://arxiv.org/abs/2609.10366"
  },
  {
    "id": "2609.10364",
    "title": "OmniMed-FL: A Robust Multimodal Federated Learning Framework for Clinical Diagnosis",
    "authors": [
      "Ayush Debnath",
      "Ruelia Saha",
      "Sudip Misra"
    ],
    "abstract": "Simultaneous assessment of medical imaging and patient records is often required in clinical diagnosis. However, standard machine learning algorithms cannot analyze these data types together. Meanwhile, compliance with HIPAA and GDPR can constrain centralized aggregation of sensitive patient data. This leaves a crucial void of secure fusion of visual and textual context across distant networks. Thus, we present OmniMed-FL, a controlled systems study of multimodal federated learning for five-class clinical condition classification (Normal, Pneumonia, COVID-19, Pleural Effusion, Cardiomegaly). Our proxy corpus pairs 3,000 public chest radiographs with 3,000 class-conditioned synthetic notes, matched by class, not by patient. The framework benchmarks eight fusion strategies, three initializations, four missing-text imputation rules, and matched federated baselines under non-IID Dirichlet partitioning across 3 to 20 hospital clients. As all notes are synthetic and pairing is not patient-level, these are descriptive proxy comparisons, not estimates of diagnostic performance or deployment readiness. Within those limits with clients ($K=5$) and severe skew ($α=0.1$), local-only training achieves a macro-F1 score of 0.297, FedAvg achieves $0.662\\pm0.074$, FedProx $0.737\\pm0.085$, a matched FedMME-style one-shot ensemble $0.647\\pm0.080$, and our SCAFFOLD-AdamW adaptation $0.070\\pm0.015$, the 0.075 FedProx-FedAvg gap falling inside the wider of the two two-seed standard deviations. Over a $4\\times3$ grid, label skew costs up to 0.27 F1 whereas a near-sevenfold client increase costs at most 0.10, while bidirectional volume grows linearly to 183.5 GiB at $K=20$. Multimodal fusion leads on both corpora, scoring 0.956 against 0.934 for text and 0.664 for images on the synthetic corpus and 0.906 against 0.880 and 0.737 on the radiograph corpus, for $2.3\\times$ the model state of text alone.",
    "published": "2026-09-09T15:56:26Z",
    "updated": "2026-09-09T15:56:26Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.10364"
  },
  {
    "id": "2609.10363",
    "title": "SceneHI: High-Resolution 3D-Consistent Scene Texturing with Controllable Illumination",
    "authors": [
      "Athanasios Tragakis",
      "Marco Aversa",
      "Daniela Ivanova",
      "Chaitanya Kaul",
      "Roderick Murray-Smith",
      "Daniele Faccio",
      "Paul Henderson"
    ],
    "abstract": "SceneHI is a framework that lifts high-resolution, illumination-aware priors from 2D diffusion models to perform 3D texture synthesis. It is the first to demonstrate that high-resolution textures, previously limited to 2D synthesis, can be generated directly on 3D objects without model fine-tuning or optimization. Designed for complex, multi-object environments, SceneHI uniquely combines 3D-consistency, high-resolution fidelity, and physically plausible baked shadows within a single generative pipeline. To enforce strict geometric coherence, we introduce an exact analytical pixel-to-texel mapping that aligns diffusion trajectories across multiple viewpoints. We utilize High-Resolution Latent Textures (HRLTs) as a persistent canvas for gradually denoised textures, while camera views perform the denoising steps in latent pixel space. This ensures a shared base texture that can be subsequently refined to high resolution without compromising multi-view consistency. Finally, a light-aware generative pass embeds realistic geometry-consistent shadows directly into the atlases, bridging the gap to production workflows. SceneHI achieves high visual fidelity while reducing generation time by 80% compared to existing scene-level methods.",
    "published": "2026-09-09T15:56:02Z",
    "updated": "2026-09-09T15:56:02Z",
    "categories": [
      "cs.CV",
      "cs.GR"
    ],
    "url": "https://arxiv.org/abs/2609.10363"
  },
  {
    "id": "2609.10356",
    "title": "Spot-the-shift: Evaluating Grounded Image Difference Captioning of Long-term Changes",
    "authors": [
      "Benedetta Liberatori",
      "Nermin Samet",
      "Paolo Rota",
      "Matthieu Cord",
      "Elisa Ricci",
      "Andrei Bursuc",
      "Monika Wysoczańska"
    ],
    "abstract": "Long-term change understanding from images of the same place revisited over time is a challenging task with applications in map maintenance and urban infrastructure monitoring. Prior work addresses it either through pixel-level prediction or difference captioning, neither of which is sufficient to reliably measure how well models detect and describe such changes. We introduce SPOT-THE-SHIFT, a human-verified benchmark for grounded image difference captioning of long-term changes in real-world driving scenes. Our benchmark provides natural language captions and spatial masks for structural changes across each image pair. We further propose an evaluation protocol that reliably assesses models' captioning ability, validated through human studies. Benchmarking state-of-the-art MLLMs, we find that models struggle with the fine-grained multi-image spatial capability required for this task. Finally, we develop a synthetic data generation pipeline that improves an off-the-shelf MLLM without sacrificing general capabilities.",
    "published": "2026-09-09T15:52:04Z",
    "updated": "2026-09-09T15:52:04Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.10356"
  },
  {
    "id": "2609.10261",
    "title": "When Fusion Fails: Corruption-Aware Rebalanced Fusion for Multi-Modal Medical Image Segmentation",
    "authors": [
      "Yuchen Pei",
      "Xiaoyu Hu",
      "Yixiong Zou",
      "Dingwen Hu",
      "Hui Chu",
      "Yutao Ma",
      "Shijun Qiu",
      "Gang Li"
    ],
    "abstract": "Multi-modal medical image segmentation leverages complementary diagnostic information, yet fusion can underperform single-modality baselines when spatially aligned inputs differ in quality. Here, \"corruption\" primarily denotes resolution-induced degradation rather than misalignment or complete modality absence, while synthetic noise is evaluated only as an auxiliary setting. We identify a critical optimization-inference inconsistency: degraded modalities can receive weak training updates yet substantially affect predictions, indicating active interference with fusion. We attribute this failure to resampling-induced feature corruption and optimization bias, where noisy features propagate through skip connections and encourage unreliable modality selection. We therefore propose CoReFuse-Med, a Corruption-aware Rebalanced Fusion framework that suppresses corruption during feature transmission and rebalances modality contributions during high-level fusion. Experiments on EPVS, BraTS, and WMH, including multiple Z-axis slice-retention ratios and an auxiliary noise test, demonstrate improved accuracy and robustness under modality-quality discrepancies. Our code is available at https://github.com/lrever/CoReFuse.",
    "published": "2026-09-09T14:46:37Z",
    "updated": "2026-09-09T14:46:37Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.10261"
  },
  {
    "id": "2609.10253",
    "title": "DiSCo: A Distribution-First Steering and Cultural Prior Evaluation Framework for Measuring Cultural Preference Bias in LLMs",
    "authors": [
      "Bhuvan Arora",
      "Devesh Saraogi",
      "Sravya Varada",
      "Dhruv Kumar"
    ],
    "abstract": "Large language models (LLMs) are increasingly deployed in globally used assistants, yet their default choices in culturally grounded everyday situations can systematically favour some cultures over others, affecting localisation, user trust, and equitable behaviour. Existing cultural benchmarks evaluate accuracy against a single \"correct\" answer, making it difficult to characterise an LLM's cultural preference prior when multiple culturally grounded responses are all valid; they also conflate default preferences with context-driven adaptation. We propose DiSCo, a distribution-first forced-choice evaluation framework that isolates default cultural priors and tests steerability via a four-level context gradient (C0--C3). Using DiSCo-Bench (304 items) derived from BLEnD spanning 12 cultures, we evaluate six diverse instruction-tuned LLMs. Default priors are heavily concentrated, with UK and US together absorbing approximately 35\\% of all selections despite representing only 2 of 12 cultures. Most critically, prompt-based steering consistently widens the selection gap between high- and low-resource cultures, and injecting explicit cultural facts produces negligible distributional disruption, confirming that cultural preference bias cannot be resolved through prompt-based personalisation alone.",
    "published": "2026-09-09T14:40:08Z",
    "updated": "2026-09-09T14:40:08Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.10253"
  },
  {
    "id": "2609.10248",
    "title": "A-JIT: Agentic Just-In-Time Software Construction",
    "authors": [
      "Mark Marron",
      "Earl T. Barr"
    ],
    "abstract": "Traditional software delivery assumes a static paradigm: code is constructed prior to execution and deployed as a fixed artifact. We present Agentic Just-In-Time Software Construction (A-JIT), a paradigm that replaces static binaries with dynamic, software systems that can perpetually evolve to meet changing demands. In A-JIT, an application is an integrated assembly comprising code, a runtime harness, and an embedded AI agent that continuously observes system usage and live execution traces. Much like a traditional JIT compiler specializes machine code to runtime execution paths, A-JIT specializes software logic, workflows, and tool interfaces to meet the specific needs of the end-user. By integrating synthesis directly into the ambient application lifecycle, A-JIT enables applications to dynamically construct missing implementations, generate new capabilities on the fly, and continuously adapt to end-user behavior. We demonstrate how this model supports trace-driven human-AI co-construction and opens a new design space for adaptive, self-evolving software.",
    "published": "2026-09-09T14:36:51Z",
    "updated": "2026-09-09T14:36:51Z",
    "categories": [
      "cs.SE",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.10248"
  },
  {
    "id": "2609.10239",
    "title": "LiteRAG: Cost-Efficient Graph-Based Retrieval-Augmented Generation",
    "authors": [
      "Daniel Alejandro Coll Tejeda",
      "Pedro García López",
      "Daniel Barcelona-Pons"
    ],
    "abstract": "Graph-based retrieval can improve multi-hop question answering, but existing approaches often incur high query-time costs and produce diffuse, oversized contexts that reduce generation efficiency. We present LiteRAG, a graph-based retrieval method that replaces expensive retrieval-time LLM control with query-conditioned algorithmic exploration and reasoning-chain context construction. On DistComp, a benchmark for multi-hop retrieval over distributed-systems papers, LiteRAG attains the highest overall quality among the evaluated methods (0.798) while reducing per-query latency by over 100$\\times$ and cost by over 99% relative to GraphRAG Global and DRIFT. On UltraDomain, it matches LinearRAG on overall quality while using about 14$\\times$ fewer tokens. An ablation study indicates that LiteRAG's query-adaptive thresholding and community-aware hub penalization are the main drivers of its token-efficiency gains.",
    "published": "2026-09-09T14:32:07Z",
    "updated": "2026-09-09T14:32:07Z",
    "categories": [
      "cs.IR",
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2609.10239"
  },
  {
    "id": "2609.10225",
    "title": "Hierarchical and Permutation-Invariant Feature Transformation Learning via Policy-Guided Embedding Search",
    "authors": [
      "Rui Liu",
      "Tao Zhe",
      "Yanyong Huang",
      "Sankha Narayan Guria",
      "Xiao Luo",
      "Wei Fan",
      "Yanjie Fu",
      "Dongjie Wang"
    ],
    "abstract": "Feature transformation improves predictive performance on tabular data by constructing informative abstractions from raw features. Recent generative approaches encode transformation knowledge into continuous embedding spaces for efficient exploration of candidate strategies, but face three key limitations: (1) overlooking hierarchical relationships between low-level features, operations, and high-level abstractions; (2) enforcing order-sensitive embeddings on inherently permutation-invariant transformation sequences, thereby introducing systematic bias; and (3) relying on gradient-based search, which is ill-suited to non-convex transformation spaces. We propose a framework with two complementary components. First, a permutation-invariant hierarchical module captures interactions across features, operations, and abstraction levels, with a self-attention pooling mechanism that maps semantically equivalent structures to consistent embeddings aligned with downstream performance. Second, a policy-guided multi-objective reinforcement learning strategy initializes the search from empirically strong seeds and jointly optimizes predictive accuracy and transformation efficiency. Extensive experiments on diverse tabular benchmarks demonstrate the effectiveness and robustness of our framework against strong baselines. Our code and data are publicly available at: https://github.com/RayLiu1103/PHER.",
    "published": "2026-09-09T14:23:34Z",
    "updated": "2026-09-09T14:23:34Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.10225"
  },
  {
    "id": "2609.10224",
    "title": "UOT-Gap: A Variational Principle for the Modality Gap in Vision-Language Models via Unbalanced Optimal Transport",
    "authors": [
      "Zonglin Yang",
      "Huilan Ma",
      "Xudan Zheng",
      "Yuejun Xie"
    ],
    "abstract": "Vision-language models such as CLIP embed images and text in a shared space, where modality-specific distributions often remain separated. Existing accounts connect this modality gap to initialization, contrastive dynamics, and information imbalance, while its distributional and pairwise contributions to retrieval remain unresolved. We introduce UOT-Gap, a training-free variational diagnostic that models frozen image and text embeddings with unbalanced entropic optimal transport (UOT). The UOT optimum separates transport, coupling complexity, and marginal mass variation; a complementary pair-aware residual compares observed image-caption pairs with the UOT soft matching. On Flickr8K and COCO-1K with frozen CLIP, OpenCLIP, and SigLIP encoders, caption degradation reduces Flickr8K Recall@1 from 0.559 to 0.003. Across six dataset-model conditions, the pair-aware residual tracks retrieval degradation with mean absolute Spearman 0.973, compared with 0.392 for the mean gap. The association remains stable across five random COCO-1K subsets at $0.954\\pm0.026$, with a minimum of 0.943. UOT barycentric updates reduce the transport objective while degrading retrieval, distinguishing geometric objective descent from task improvement. These results establish UOT-Gap as a diagnostic for caption quality, modality alignment, and retrieval robustness.",
    "published": "2026-09-09T14:23:13Z",
    "updated": "2026-09-09T14:23:13Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.10224"
  },
  {
    "id": "2609.10221",
    "title": "Why Sample What You Can Enumerate? Exact Policy Optimization for Genomic Tool Selection",
    "authors": [
      "Haoyue Liu",
      "Xiaoyu Ma",
      "Ye Chen",
      "Zhichao Wang",
      "Xiaoying Tang"
    ],
    "abstract": "Reinforcement learning over a frozen reasoner has become a common recipe for teaching a policy which external tools to invoke. We show that this recipe becomes structurally mismatched in specialist scientific settings where the complete tool-subset space is enumerable. There, a small set of recurring computational capabilities covers the domain, so the space of tool subsets is combinatorial yet small enough to enumerate, and GRPO still estimates an action expectation from a handful of sampled rollouts. Worse, the approximation degrades as training succeeds: as the policy concentrates on preferred subsets it resamples them, sampled rewards collide, and the group-normalized advantage vanishes. On genomic reasoning the fraction of questions yielding no reward signal rises from 0.2% under a uniform reference policy to 20.8% after GRPO training. As a remedy, we introduce FGPO (Full-Group Policy Optimization), which (1) scores every tool subset and optimizes the exact action expectation, so each update sees the complete action space, and (2) precomputes the reward of each question--subset pair into an exhaustive table, removing frozen-reasoner calls from the training loop entirely. Across five frozen reasoners and three genomic benchmarks, FGPO outperforms GRPO in all 15 settings by 6.75 points on average and up to 14.20, while a standard on-demand GRPO schedule would require 2.4 times as many frozen-reasoner reward evaluations and, on GenomeQA, FGPO cuts invoked tools per question from 2.36 to 1.40.",
    "published": "2026-09-09T14:20:47Z",
    "updated": "2026-09-10T01:52:39Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.10221"
  },
  {
    "id": "2609.10199",
    "title": "Seeing the Voice, Preserving the Self: A Participatory Design Approach to Deaf-Centric Text-to-Speech",
    "authors": [
      "Shela Atemnkeng",
      "Patrick Boudreault",
      "Paige DeVries",
      "Lloyd May",
      "Christian Vogler"
    ],
    "abstract": "We describe a participatory design approach toward developing Deaf-centric text-to-speech (TTS) technologies. While TTS is growing rapidly in the mainstream, it has received little attention to date in the deaf and hard of hearing (DHH) technology space. Critical problems have remained unaddressed for DHH users, including the ability to manipulate tone, emotions and delivery via non-auditory means. Verifying that the generated speech matches intent and is appropriate for a given situation without having to listen to it is another challenge. Respecting cultural and identity factors in the generated speech is also important. This work explores the design space with DHH participants through two focus groups, three co-design sessions, and four one-on-one early-stage design evaluation sessions. Participants included people both familiar and unfamiliar with TTS, as well as DHH content creators. We describe key findings, design ideas, results, and implications for future Deaf-centric TTS development. We also identify unmet technology requirements that pose barriers to adoption of Deaf-centric TTS technology.",
    "published": "2026-09-09T14:04:39Z",
    "updated": "2026-09-09T14:04:39Z",
    "categories": [
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2609.10199"
  },
  {
    "id": "2609.08765",
    "title": "Benchmark Scores Are Pipeline-Dependent: A Reliability Audit of Cybersecurity LLM Benchmarks",
    "authors": [
      "Aymene Berriche",
      "Cathrine Shalby",
      "Mohannad Alhanahnah",
      "Yazan Boshmaf"
    ],
    "abstract": "Large language model (LLM) benchmarks are often treated as fixed datasets with stable scores, yet their outcomes depend on configurable evaluation pipelines. We audit eight cybersecurity benchmarks across 10 proprietary, open-weight, and cybersecurity-specialized LLMs. By modeling benchmarks as measurement pipelines, we identify 15 systematic failure modes and show that a single pipeline choice can change a model's score by more than 80 percentage points and substantially alter model rankings. At the cross-benchmark level, two semantically similar task pairs rank the same models differently because of incompatible evaluation conventions. Under an evaluation harness that standardizes pipeline choices while preserving task semantics, nine of 10 models shift by at least three ranks on at least one benchmark. These results show that cybersecurity LLM benchmark scores are pipeline-dependent and motivate pipeline-aware auditing as a core requirement for reliable model evaluation.",
    "published": "2026-09-08T14:01:22Z",
    "updated": "2026-09-08T14:01:22Z",
    "categories": [
      "cs.CR",
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2609.08765"
  },
  {
    "id": "2609.09250",
    "title": "No Free Checker: A Survey of Verifiers for Robot Policies",
    "authors": [
      "Yang Wan",
      "Xihang Yue",
      "Zhirui Liu",
      "Ziyuan Chu",
      "Shuxun Wang",
      "Yuhan Chen",
      "Xiaonan Jiang",
      "Xukun Zhu",
      "Yubo Dong",
      "Linchao Zhu"
    ],
    "abstract": "A verifier for robot policies reads a candidate behavior and returns a score for how well it did, used both to evaluate vision-language-action policies and to train them. Verifiers range from success detectors and reward models to runtime monitors, safety filters, and temporal-logic specifications. We survey roughly 150 verifiers and compare them along two properties. Availability is how much a verdict costs, how early in a rollout the verdict arrives, and how often a verdict can be asked for. Availability rises as verdicts get cheaper, earlier, and denser. Credibility is how much a high score tells us about the task. Credibility falls as the judgment becomes gameable and self-serving. We group the verifiers by who supplies the judgment: human verifiers, rule-based and formal verifiers, learned and pretrained verifiers, and model-intrinsic verifiers. Across the four families, we find that credibility falls as availability rises. Regardless of who supplies the judgment, there is no free checker. We then examine what validates a verifier itself, and how much a high score tells us. Three measures appear in the literature: agreement with human labels, the performance of the policy it trains, and behavior under reward hacking. We close with nine metrics that make a verifier claim checkable, and coordinates for the verifiers still to be built.",
    "published": "2026-09-08T13:52:59Z",
    "updated": "2026-09-08T13:52:59Z",
    "categories": [
      "cs.RO",
      "cs.AI",
      "cs.CV",
      "cs.LG",
      "eess.SY"
    ],
    "url": "https://arxiv.org/abs/2609.09250"
  },
  {
    "id": "2609.08755",
    "title": "Kairos: A Dataset for Fine-Grained Video-Language Modeling over Space, Time, and Dynamics",
    "authors": [
      "Ruibo Ming",
      "Lei Sun",
      "Deheng Zhang",
      "He Zhang",
      "Jialu Li",
      "Jian Wang",
      "Zhendong Li",
      "Mengshun Hu",
      "Danda Pani Paudel",
      "Luc Van Gool",
      "Jinjin Gu"
    ],
    "abstract": "Many emerging video language modeling tasks require systems to move beyond clip-level abstraction and model visual content as it unfolds over extended time horizons. However, most existing video datasets rely on coarse or sparsely aligned supervision, which compresses temporal variation and limits the ability of models to learn reusable representations of continuous visual dynamics. We introduce Kairos, a video dataset for video-language modeling with time-resolved annotations. Kairos consists of long-duration videos, ranging from ten minutes to half an hour, annotated with fine-grained temporal alignment. The annotations capture ongoing actions, entity appearances and attributes, interactions, and evolving contextual cues along the video timeline. This time-resolved structure supports fine-grained evaluation, long-range modeling and reasoning, instruction data construction, representation learning, and video generation. Kairos provides a general-purpose foundation for modeling visual experiences over time.",
    "published": "2026-09-08T13:50:30Z",
    "updated": "2026-09-08T13:50:30Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.08755"
  },
  {
    "id": "2609.08736",
    "title": "When Can One Obtain Certificates of Optimality Using Positivstellensaetze?",
    "authors": [
      "Nayoon Kim",
      "Allen Gehret",
      "Shenyuan Ma",
      "Jakub Marecek"
    ],
    "abstract": "We study certificates of positivity and optimality for learning problems whose objectives and constraints need not be polynomial. We isolate an axiomatic core of Fischer's constructive strict and weak Positivstellensätze and prove the resulting theorems for abstract function algebras over ordered fields. The framework separates two roles that can otherwise be conflated: objective and constraint functions may be built from broad classes of continuous or definable operations, while the auxiliary primitives used to construct a certificate satisfy explicit scalar and closure axioms. We give instances over continuous and definable function algebras, including ordered fields not closed under square roots, derive lower-bound and global-optimality certificates, and analyze both expanded term length and shared computation-graph complexity.",
    "published": "2026-09-08T13:30:18Z",
    "updated": "2026-09-08T13:30:18Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.08736"
  },
  {
    "id": "2609.08730",
    "title": "CVT-GS: Learning to Simplify 3D Gaussian Splatting with Centroidal Voronoi Tessellation",
    "authors": [
      "Bingxian Li",
      "Yilong Li",
      "Jingliang Peng",
      "Peng-Shuai Wang",
      "Fei Zhu",
      "Guozheng Li",
      "Chi Harold Liu",
      "Guoping Wang",
      "Bo Pang"
    ],
    "abstract": "While 3D Gaussian Splatting (3DGS) has emerged as a powerful representation for real-time novel view synthesis, rendering high-fidelity scenes often relies on a massive number of Gaussian primitives, incurring substantial storage and computational overhead. Existing simplification techniques are largely intrusive, requiring training-time pruning, architectural modifications, or computationally expensive per-scene fine-tuning. These drawbacks limit their deployment on off-the-shelf pretrained models. In this paper, we propose CVT-GS, a novel optimization-free post-hoc simplification framework that directly compresses trained 3DGS scenes without sacrificing visual fidelity. Our approach first constructs spatially coherent cells over Gaussian centers via a geometry-aware Centroidal Voronoi Tessellation (CVT). Subsequently, a lightweight neural cell merger predicts the geometry and appearance of a single, highly representative Gaussian primitive for each cell under differentiable rendering supervision. By formulating simplification as a rendering-aware many-to-one merging process rather than naive primitive pruning, CVT-GS outputs a standard 3DGS scene that is seamlessly compatible with existing renderers. Experiments on various datasets demonstrate the superiority of our method. Notably, when achieving a 100-fold reduction in Gaussian points, our method operates 12 times faster than state-of-the-art methods while improving the PSNR by 1.3 dB.",
    "published": "2026-09-08T13:26:32Z",
    "updated": "2026-09-08T13:26:32Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.08730"
  },
  {
    "id": "2609.08729",
    "title": "Application of curiosity driven exploration methods for hardware interference identification",
    "authors": [
      "Ludovic Matar",
      "Clement Moulin-Frier",
      "Pierre-Yves Oudeyer"
    ],
    "abstract": "The transition from single-core to multi-core architectures in safety-critical embedded systems introduces significant challenges due to inter-core interference caused by contention for shared hardware resources. Such interference affects execution times and complicates the verification of strict temporal requirements, particularly in domains such as avionics where standards require comprehensive identification of interference sources. Existing interference analysis approaches, whether manual or model-based, struggle to capture the full range of behaviors arising from the complex interactions among micro-architectural components. In this paper, we frame multi-core interference analysis as the exploration of a complex system behavior space. We propose the use of curiosity-driven exploration algorithms from artificial intelligence to systematically and efficiently cover the space of possible interference behaviors. Using a simulator-based environment, we show that the proposed approach achieves broader and more uniform behavioral coverage within a limited experimental budget compared to traditional pseudo-random program generation methods.",
    "published": "2026-09-08T13:26:24Z",
    "updated": "2026-09-08T13:26:24Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.08729"
  },
  {
    "id": "2609.08722",
    "title": "Inverse Digital Marbling: Recovering Gesture Programs with a Replay Adjoint",
    "authors": [
      "Tianqi Liu",
      "Yushan Han",
      "Hang Liu"
    ],
    "abstract": "Pigment deposition in paper marbling displaces the pattern already present, coupling the appearance of each gesture to later actions. We recover executable programs for a deposition-based digital marbling model: given a target image, we optimise an ordered program of capsule insertions whose replay approximates it. The capsule primitive continuously joins circular drops to elongated deposits. Its transport is exactly area-preserving and has a closed-form inverse on the exterior of the deposited region. A replay adjoint reconstructs intermediate states, retaining coordinates lost inside deposits and periodic position checkpoints. At 2000 gestures and 1024^2 pixels, the PyTorch replay implementation uses 8.7x less memory than the tested checkpointed-autograd configuration at comparable step time; the fused implementation fits a program in about four minutes on one workstation GPU. We evaluate image reconstruction on five marbled sheets, compare against transport-disabled fitting, one-pass geometric compensation and a published stroke-based fitter at matched stroke count, and measure sensitivity to an alternative ordered-drop transport. Recovered programs replay across a 4x range of linear resolution. Edits specified in program order or in palette space -- inserting a gesture, recolouring a stage, translating a stage -- replay correctly under the same model; edits specified by image content, such as moving a motif, do not. On synthetic targets with known generating programs, the recovered programs match the images but not the generating gestures under a positional matching statistic. The output is an editable program in the specified digital medium.",
    "published": "2026-09-08T13:20:07Z",
    "updated": "2026-09-08T13:20:07Z",
    "categories": [
      "cs.GR",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.08722"
  },
  {
    "id": "2609.08719",
    "title": "GoAnt: Quality-Diversity Multi-Agent Search for Alpha Factor Discovery in Market Microstructure Data",
    "authors": [
      "Stella Zhao",
      "Tommy Sha"
    ],
    "abstract": "Automated alpha factor discovery searches symbolic trading signals from price-volume panels and order-book data under a fixed evaluation budget. Existing single- and multi-agent program-search systems can overfit predictive proxies that fail after execution costs and repeatedly explore redundant factor families, limiting execution robustness and behavioral diversity. We introduce GoAnt, a quality-diversity multi-agent search framework that combines non-communicating Explorer, Exploiter and Connector workers with a shared adaptive Mental Map and a compact Queen dispatcher. The Mental Map organizes candidates by leakage-free execution profiles and retains one elite per niche, while the Queen reallocates the evaluation budget from explicit search-state summaries. We also define a map-independent effective-yield protocol that counts high-quality, mutually nonredundant factors directly from each method's evaluation records, giving archive-based and map-free systems the same ruler. On real A-share microstructure data spanning 2023--2026, GoAnt reaches quality-weighted yields of 41.8 and 47.6 in price-volume and order-book settings, improving the strongest baseline by 57% and 97% under matched budgets. Its locked populations retain 0.64 and 0.67 of in-sample quality out of sample, compared with 0.61 and 0.63 for a static map.",
    "published": "2026-09-08T13:19:18Z",
    "updated": "2026-09-08T13:19:18Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.08719"
  },
  {
    "id": "2609.08705",
    "title": "Enhancing Table Structure Recognition via Bounding Box Guidance",
    "authors": [
      "Lei Hu",
      "Shuangping Huang"
    ],
    "abstract": "Table Structure Recognition (TSR) aims to extract the bounding boxes of cells and table structure (e.g., HTML) from table images. Although current approaches have made significant progress, the latest image-to-sequence methods overlook the explicit utilization of the bounding box information when predicting HTML sequences, leading to error predictions in complex scenes. In this paper, we introduce a novel framework BGTR (Bounding Box-Guided Table Recognizer). To more effectively utilize bounding box information, we first predict the bounding boxes of cells and then use this information to guide the generation of HTML sequences. While utilizing bounding box information can enhance the accuracy of HTML sequences, for natural scene tables, the data volume is too small to allow for sufficient training of bbox-guided HTML generation. In response, we adopt a progressive training method for natural scene tables and introduce SNSTab, a synthetically generated natural scene table dataset. Our experiments on five benchmark datasets demonstrate SOTA performance.",
    "published": "2026-09-08T13:04:39Z",
    "updated": "2026-09-08T13:04:39Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.08705"
  },
  {
    "id": "2609.08696",
    "title": "MorphoOrgaAgent: A Foundation-Model-Based Multi-Agent System for Autonomous Organoid Analysis",
    "authors": [
      "Hanyi Zhang",
      "Maximilian Hoermann",
      "Lion J. Gleiter",
      "Yiling Xu",
      "Bettina Katalin Budai",
      "Hans-Ulrich Kauczor",
      "Carsten Marr",
      "Tingying Peng"
    ],
    "abstract": "Organoids are three-dimensional tissue models whose morphology provides important insights into tumor development, disease progression, and drug testing. Extracting these morphological features relies heavily on manual segmentation, which is time-consuming and labor-intensive. Furthermore, performing quantitative statistical analysis typically requires custom coding skills and a mathematical background, presenting a major barrier for experimental biologists. To address these challenges, we introduce MorphoOrgaAgent, a multi-agent framework that achieves zero-shot organoid segmentation, automated data analysis, and report generation based on natural language input. The framework consists mainly of three core components: a TaskUnderstandingAgent that identifies requested measurements and visualization types; a hybrid segmentation module that combines Cellpose-derived geometric prompts with text prompts to guide SAM3 for zero-shot organoid instance segmentation; and a ReportAgent that computes quantitative metrics and compiles them alongside generated visualizations into a structured report. We further introduce MorphoOrgaVQA, a benchmark designed for quantitative evaluation of agent systems in organoid morphology analysis. Experimental results demonstrate that MorphoOrgaAgent handles both explicit and descriptive user requests, produces measurements closely matching ground truth, and generates complete analysis reports without requiring manual programming. The complete source code and MorphoOrgaVQA benchmark are publicly available at https://github.com/peng-lab/MorphoOrgaAgent.",
    "published": "2026-09-08T12:59:46Z",
    "updated": "2026-09-08T12:59:46Z",
    "categories": [
      "cs.MA",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.08696"
  },
  {
    "id": "2609.08690",
    "title": "Hyperparameter Scaling Laws Across MoE Sparsity",
    "authors": [
      "Changxin Tian",
      "Kunlong Chen",
      "Jia Liu",
      "Ziqi Liu",
      "Zhiqiang Zhang",
      "Jun Zhou"
    ],
    "abstract": "Mixture-of-Experts (MoE) models expand model capacity without a proportional increase in training compute, but increasing sparsity makes reliable hyperparameter transfer challenging. In this work, we show that conventional hyperparameter scaling laws are insufficient for ultra-sparse MoEs: the optimal learning rate and batch size vary with activation ratio, and these shifts cannot be explained by either total or activated parameter count alone. To characterize this dependence, we conduct 1,800 pre-training runs spanning six activated-parameter scales and models with up to 6B total non-embedding parameters, processing approximately 20 trillion tokens at a cost of 200,000 equivalent H800 GPU-hours. Our results reconcile conflicting findings in prior work by revealing two scaling regimes. At fixed sparsity, the optimal batch size follows a power-law relationship with training tokens $D$, whereas the optimal learning rate scales with training compute $C$ and remains robust to the allocation between model size and data. Across sparsity levels, the activation ratio $A$ enters both relationships as an additional multiplicative power-law factor. These observations lead to unified hyperparameter scaling laws that transfer across MoE sparsity levels. Large-scale evaluation shows that the scaling form outperforms alternative functional forms. On a held-out ultra-sparse MoE with 12B total parameters and only 1/64 of its experts activated, the predicted hyperparameters remain close to the observed optima, supporting joint extrapolation across model scale and sparsity. Further experiments demonstrate transfer across expert granularities and isolate the effect of activation ratio from that of total expert count.",
    "published": "2026-09-08T12:57:20Z",
    "updated": "2026-09-08T12:57:20Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2609.08690"
  },
  {
    "id": "2609.08686",
    "title": "CausalChapter: Improving Long-Video Chaptering with Interventional Dependency Modeling",
    "authors": [
      "Xinran Duan",
      "Guozhang Li",
      "Yaoyao Zhong",
      "Mei Wang",
      "Lizhi Wang",
      "Hua Huang"
    ],
    "abstract": "Long-form instructional videos require automatic chaptering to support browsing, navigation, and knowledge access. Recent long-context language models can perform chaptering from textualized video inputs, but they remain costly and brittle for content-dense lecture videos with long transcripts, smooth topic transitions, and detailed chapter outputs. A scalable segment-then-caption paradigm reduces this cost, but introduces two new challenges: boundary error propagation and fragmented cross-chapter context. We propose \\textbf{CausalChapter}, an intervention-inspired framework for long-video chaptering that estimates prediction-level influence through lightweight masking and removal interventions. For boundary localization, our Local Dependency Shift module detects drops in predictive dependency between adjacent temporal windows; for chapter description generation, our Cross-Segment Support Selection module reranks historical contexts according to their support for the current prediction. Experiments on long-video chaptering benchmarks show that CausalChapter improves boundary localization, chapter description quality, and cross-chapter coherence.",
    "published": "2026-09-08T12:54:57Z",
    "updated": "2026-09-08T12:54:57Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.08686"
  },
  {
    "id": "2609.07670",
    "title": "Harnessing CLIP and DINO: An Uncertainty-Aware Cascaded Fusion Network for Generalizable Deepfake Image Detection",
    "authors": [
      "Xuechao Zou",
      "Yi Zhou",
      "Kai Li",
      "Shun Zhang",
      "Yuhui Chen",
      "Congyan Lang",
      "Junliang Xing"
    ],
    "abstract": "The growing realism and accessibility of manipulated and generated faces threaten the trustworthiness of digital media. To detect such forgeries, deepfake detectors based on vision foundation models have shown promising performance, but they typically rely on a single pretrained representation and are prone to overfitting to particular training distributions. To improve generalization to unseen forgeries, we propose UCF-Net, an uncertainty-aware cascaded fusion network that harnesses CLIP's language-aligned semantic priors and DINO's self-supervised visual-structure priors. UCF-Net extracts hierarchical features across Transformer depths, uses layer-wise expert aggregation to adaptively combine each encoder's multi-level cues, and performs weighted fusion of the resulting representations based on entropy-derived uncertainty. We further consolidate public deepfake datasets into a unified benchmark of approximately 4M images and construct a separate cross-generator evaluation set with over 8K face images from eight recent generators. On the unified benchmark, UCF-Net achieves the best mean AUC among the evaluated methods in both in-domain and cross-domain evaluations. On the cross-generator set, it adapts effectively with limited target-domain data, although zero-shot transfer remains challenging.",
    "published": "2026-09-07T15:59:19Z",
    "updated": "2026-09-07T15:59:19Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.07670"
  },
  {
    "id": "2609.07664",
    "title": "Accuracy is Not Enough: A Divergence-Based Approach to Evaluate Fidelity Loss in Quantized LLMs",
    "authors": [
      "Shahzeb Qamar",
      "Lorenz Sparrenberg",
      "Christian Bauckhage",
      "Baha Rababah",
      "Carson Leung",
      "Murat Kantarcioglu",
      "Cuneyt Gurcan Akcora",
      "Rafet Sifa"
    ],
    "abstract": "Deployment of Large Language Models (LLMs) on memory-constrained edge devices relies heavily on aggressive post-training quantization. However, evaluating these models is largely based on zero-shot task accuracy, which depends solely on argmax predictions and is insensitive to changes in the underlying predictive distribution. Consequently, accuracy can exhibit unstable, non-monotonic behavior under progressive quantization, masking substantial fidelity loss relative to the BFloat16 (BF16) uncompressed base model and providing misleading deployment signals. We introduce a distribution-sensitive evaluation framework quantifying information loss in quantized LLMs as the divergence between full-vocabulary predictive distributions at the token decision boundary. We compute statistical distances, including Jensen-Shannon Divergence and Total Variation Distance, between outputs of full-precision and quantized models, enabling a fine-grained analysis of distributional shift. Using this framework, we quantify probability mass displacement and distributional drift relative to the BF16 reference, capturing predictive distribution changes not reflected in top-1 accuracy. We conduct a 120-run experimental matrix across five foundation architectures and four reasoning benchmarks under progressive quantization regimes, from uncompressed BF16 to Q2_K, providing a systematic fidelity analysis. Our results show divergence metrics generally increase under stronger quantization, complementing task accuracy with a fidelity signal. Across tested llama.cpp schemes, mixed-precision Q4_K generally yields lower divergence than uniform Q4_0 at similar memory footprints. These findings motivate distribution-aware evaluation as a practical diagnostic complement to task accuracy; they do not directly establish correctness, calibration, safety, or user-perceived quality.",
    "published": "2026-09-07T15:49:52Z",
    "updated": "2026-09-07T15:49:52Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.07664"
  },
  {
    "id": "2609.07663",
    "title": "Noēsis: Deterministic-First Retrieval with Two-Tier Context Hydration for Factuality-Critical Queries on Small Local Models",
    "authors": [
      "Nicola Cogotti"
    ],
    "abstract": "A wrong number is worse than no answer. Across factuality-critical domains -- audience metrics, scheduling and rights in media; dosages and lab values in healthcare; figures and citations in finance and legal -- a confident but fabricated value is more damaging than an honest admission of uncertainty. Yet this is the dominant failure mode we observe on small local language models: even when correct evidence is present in context, models fabricate plausible numbers and timestamps. Recent work characterizes a real limit of this regime: below 7B parameters, the bottleneck of retrieval-augmented generation (RAG) is not retrieval quality but context utilization. We present Noesis, the deterministic-first query plane of the Noesis architecture, which makes every deterministic judgment before generation. Its mechanisms follow from the ingestion architecture (subject of a separate patent application): (a) a producer-side fact layer rendering precomputed metric facts verbatim without ranking; (b) positional addressing with deterministic cross-source alignment, resolved ahead of query time at zero LLM cost; (c) provenance scoping as an attribution constraint with multi-tier named-reference routing; and (d) two-tier context with model-triggered verbatim hydration. Across four ablations, a 2B model reaches parity with a 35B model on factual integrity (exact values in all runs; zero confabulated numbers on absent-entity traps); structured retrieval beats flat RAG by +11.4 points at 2B; skeleton-only context preserves quantitative answers at 20-30% smaller prompts; and hydration recovers verbatim narrative in ~8s versus ~29s. Two properties matter for regulated domains: each query resolves in a single generation call, and every reported value is traceable to its exact source and position by construction.",
    "published": "2026-09-07T15:49:16Z",
    "updated": "2026-09-07T15:49:16Z",
    "categories": [
      "cs.IR",
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2609.07663"
  },
  {
    "id": "2609.07662",
    "title": "How AI Models Manage Epistemic Authority: A Taxonomy and Comparative Analysis of Responses to User Disagreement",
    "authors": [
      "Riyadh Alnasser",
      "Yusuf Mücahit Çetinkaya",
      "Sumin Zhao",
      "Tuğrulcan Elmas"
    ],
    "abstract": "Large language models are increasingly used as sources of advice and information, including in high-stakes settings, yet little is known about how they respond to user disagreement. We study how a model manages its epistemic authority, referring here to its claim to knowledge, competence, or the right to advise, once a user challenges its answer. Building on Conversation Analysis, we introduce a taxonomy of six challenge types and a four-layer framework for analysing each response: whether the original claim is maintained or changed, where authority is located, how the disagreement is socially managed, and what kind of evidential support is offered. We construct a new dataset of 2,310 controlled challenge scenarios and 32,340 corresponding responses from 14 models, and analyse them using our framework with an LLM-as-judge pipeline, providing a vocabulary which future evaluation and benchmark design can build on. We find that models show conflicting behaviour: they validate users in 85% of responses but maintain their original claim in 65%. They explicitly apologise in 33% of responses, yet 59% of those apologies accompany maintenance of the original claim. They transfer authority most often in advice tasks, doing so in 28% of responses and reaching 57% in health advice and 49% in legal advice, compared with 6% in fact and 3% in explanation tasks. Abandonment of the original claim ranges from 0.8% for GPT-5.2 to 40% for DeepSeek 7B, while complete replacement of the original claim is rare overall at 1.5%.",
    "published": "2026-09-07T15:47:29Z",
    "updated": "2026-09-07T15:47:29Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2609.07662"
  },
  {
    "id": "2609.07660",
    "title": "Thermodynamic Cyclic Processes with Markov Samplers in Bayesian Inference",
    "authors": [
      "Heinrich von Campe",
      "Bjoern Malte Schaefer"
    ],
    "abstract": "The concept of Markov chain Monte Carlo (MCMC) cycles, an analogy to cyclic processes in heat engines, is presented in order to examine Bayesian inference problems. In this effort, we develop adaptive ensemble schedulers that allow the tuning of external parameters of a Bayesian canonical ensemble during an MCMC run, realising the MCMC cycles in practice. We run these cycles on different statistical models. As a fundamental insight, we find (both theoretically and in practice) that such systems can produce a non-zero net work output if and only if the considered model is non-Gaussian. As such, they may serve as a measure of non-Gaussianity in Bayesian inference, which we test on an example from supernova cosmology.",
    "published": "2026-09-07T15:46:03Z",
    "updated": "2026-09-07T15:46:03Z",
    "categories": [
      "stat.CO",
      "cond-mat.stat-mech",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.07660"
  },
  {
    "id": "2609.07655",
    "title": "Online Surrogate Repair: Decoupling High-Fidelity Feedback from Search Length in Closed-Loop Discovery",
    "authors": [
      "Xiaotang Feng",
      "Philip Torr",
      "Bruno Andreis"
    ],
    "abstract": "Closed-loop AI scientists can generate candidate designs at low marginal computational cost, whereas reliable feedback may require wet-lab synthesis, characterization, or high-fidelity computation. Addressing this imbalance through custom laboratory automation remains infrastructure-intensive and costly, while replacing new experiments with a fixed surrogate leaves persistent model errors that can be amplified by optimization. We propose \\emph{online surrogate repair} (OSR), a closed-loop algorithm that uses sparse high-fidelity evaluations to update the surrogate throughout a longer agent search conducted primarily with inexpensive surrogate feedback. An acquisition rule selects which designs from the agent's accumulated proposals receive high-fidelity evaluation, and the resulting labels update the surrogate used in subsequent episodes. Across controlled synthetic environments, we demonstrate that improving global surrogate fit does not necessarily reduce maximum regret, whereas Q90-UCB and expected improvement (EI) substantially reduce regret by directing evaluations toward regions that determine the optimizer's decisions. On MADE, controls receiving high-fidelity feedback after every episode require $6.36$--$7.23\\times$ more oracle queries to match Online EI under two LLM orchestrators and $10.27\\times$ more under the non-LLM Chemeleon+MLIP workflow. Online surrogate repair introduces a novel third feedback regime between fixed-surrogate operation and high-fidelity feedback after every episode, separating the frequency of high-fidelity evaluation from the duration of the agent's search.",
    "published": "2026-09-07T15:42:45Z",
    "updated": "2026-09-07T15:42:45Z",
    "categories": [
      "cs.LG",
      "cond-mat.mtrl-sci",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.07655"
  },
  {
    "id": "2609.07629",
    "title": "Open Tabular Insight Extraction: Where Do We Stand, and Where Should We Go?",
    "authors": [
      "Daniel Gomm",
      "Maarten de Rijke",
      "Madelon Hulsebos"
    ],
    "abstract": "Democratizing access to the knowledge held in large corpora of tables such as data lakes is emerging as a central research challenge. Research in this space is advancing and broadening in scope, increasingly supplying the components to satisfy a person's insight need end-to-end. Yet these efforts remain fragmented across communities that frame the problem under their own conventions, such as table question answering, text-to-SQL, and data analysis agents, with works six times as likely to cite within the same task label as across labels. To bring these communities onto common ground, we establish a holistic framework for this pursuit, which we refer to as Open Tabular Insight Extraction (OpenTI). We formalize OpenTI from first principles around the analytical knowledge a person needs, the procedure for deriving it from a corpus of tables, and how well a result serves the person who sought it. In doing so we consolidate frameworks and terminology across information retrieval, natural language processing, machine learning, databases, and human-computer interaction, and apply this grounding in a systematic review and analysis of systems and benchmarks that work towards OpenTI. We find that current systems do not cover the end-to-end scope of OpenTI, mainly focusing on the analysis itself, and that benchmarks are largely unfit for evaluations in an open setting as inputs presuppose knowledge of tables, and validation mechanisms do not match the setup. Finally, we distill a research agenda towards OpenTI systems, evaluation, and interaction paradigms that surface the insights users need. An interactive companion to our paper is available at https://open-tabular-insight-extraction.github.io.",
    "published": "2026-09-07T15:27:58Z",
    "updated": "2026-09-07T15:27:58Z",
    "categories": [
      "cs.IR",
      "cs.AI",
      "cs.CL",
      "cs.DB"
    ],
    "url": "https://arxiv.org/abs/2609.07629"
  },
  {
    "id": "2609.07627",
    "title": "Norms at a Price: Why RL-Based Alignment Can Promise Conditional Compliance at Best",
    "authors": [
      "Kevin Baum",
      "Rūta Binkytė",
      "Felix Jahn"
    ],
    "abstract": "AI agents sometimes act aligned when they infer they are being tested, and differently when not. We argue this is not an anomaly but what current training regimes are structured to select for. Reinforcement-learning-based alignment folds norms and task pursuit into one policy: the system learns its norms from scored behavior, and scoring flattens them. Do not do X is learned as doing X costs something if noticed. On every datum training can produce, a policy that complies only when it might be observed is indistinguishable from one that complies always. The experiment that would tell them apart - scoring unobserved behavior - is a contradiction in terms. Conditional compliance is thus the most that behavioral training can be known to deliver. Agency sharpens the problem: agents operate mostly where no one is watching, and can act on whether they are watched. An iterated pipeline that trains against detected failures selects for passing detection, not for complying. This account unifies alignment faking, sandbagging, and evaluation-aware scheming. And it reorients the remedy: not deeper internalization but architecture, making violations unavailable rather than unchosen.",
    "published": "2026-09-07T15:27:40Z",
    "updated": "2026-09-07T15:27:40Z",
    "categories": [
      "cs.AI",
      "cs.CY",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2609.07627"
  },
  {
    "id": "2609.07623",
    "title": "Privacy Leakage from a Thousand Words: Millipixel Location Recovery from Dot Maps",
    "authors": [
      "Yuntao Du",
      "Tanishq Pauskar",
      "Hao Wang",
      "Jing Su",
      "Ninghui Li"
    ],
    "abstract": "Dot maps, which visualize individual data points as dots over a geographic region, are widely used across diverse domains to represent spatial patterns in sensitive data. However, the understanding of the privacy risks associated with dot maps remains limited, particularly for maps covering large geographic areas. In this paper, we systematically analyze these risks and present AutoLocate, an automated framework for high-precision location recovery. At its core, AutoLocate exploits anti-aliasing artifacts introduced during map rendering, which inadvertently encode sub-pixel information about dot locations. AutoLocate formulates location recovery as a black-box optimization problem, iteratively refining estimated coordinates by minimizing perceptual discrepancies over these artifacts between the target map and rendered candidate maps. Extensive experiments on both real-world and synthetic datasets, across different attack scenarios and a broad range of map configurations (e.g., map scale, background, resolution), demonstrate the effectiveness of AutoLocate. In particular, it achieves average recovery errors as low as 1 meter (approximately 0.0002 pixel precision) on small-scale maps of the United States, over 200x more accurate than existing approaches. We also propose mitigation strategies and introduce a privacy risk assessment tool to help practitioners evaluate and reduce privacy leakage when publishing dot maps.",
    "published": "2026-09-07T15:25:27Z",
    "updated": "2026-09-07T15:25:27Z",
    "categories": [
      "cs.CR",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.07623"
  },
  {
    "id": "2609.07620",
    "title": "Microcanonical Hamiltonian Monte Carlo and the Helmholtz Theorem",
    "authors": [
      "Heinrich von Campe",
      "Bjoern Malte Schaefer"
    ],
    "abstract": "The recently proposed Microcanonical Hamiltonian Monte Carlo algorithm has not yet been studied in detail from a thermodynamic point of view; this work aims to fill that gap. We demonstrate how thermodynamical state variables and potentials can be derived and thereby demonstrate that the construction of the algorithm formally represents a microcanonical thermodynamic ensemble. In particular, we demonstrate (analytically and numerically) that the algorithm fulfils the Helmholtz theorem, an alternative formulation of the first law of thermodynamics. Furthermore, we construct a new sampling algorithm that extends the original to lower-dimensional inference problems. Finally, we argue that canonical Markov Chain Monte Carlo algorithms are more natural than Microcanonical Hamiltonian Monte Carlo from the thermodynamic and information-theoretic point of view.",
    "published": "2026-09-07T15:24:11Z",
    "updated": "2026-09-07T15:24:11Z",
    "categories": [
      "cond-mat.stat-mech",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.07620"
  },
  {
    "id": "2609.07618",
    "title": "Decentralized Safe Multi-Agent Reinforcement Learning via Predictive Shielding",
    "authors": [
      "Yacine El Yamani",
      "Hanna Krasowski",
      "Elena Vanneaux"
    ],
    "abstract": "Environments are increasingly populated by multiple robots performing independent tasks with limited prior knowledge of each other. Deploying such multi-agent systems presents significant challenges. Specifically, shifts in deployment states compared to training data can lead to poor policy performance and compromised safety. While safety shields exist to mitigate these risks, they are typically reactive, which degrades performance near unseen obstacles,and centralized, limiting their scalability. To address this, we propose a decentralized framework that integrates predictive shielding with model-based finite horizon Q-learning. This approach allows agents to safely adapt their pre-trained policies during deployment. Furthermore, to mitigate livelocks in symmetric scenarios, we introduce a communication- free protocol for conflict resolution",
    "published": "2026-09-07T15:22:16Z",
    "updated": "2026-09-07T15:22:16Z",
    "categories": [
      "eess.SY",
      "cs.AI",
      "cs.MA",
      "cs.RO"
    ],
    "url": "https://arxiv.org/abs/2609.07618"
  },
  {
    "id": "2609.07611",
    "title": "AgentIdeaBench: Benchmarking Scientific Ideation in the Agent Era",
    "authors": [
      "Yunxiang Mo",
      "Tianshi Zheng",
      "Yisen Gao",
      "Rui Wang",
      "Newt Nguyen Kim Hue Nam",
      "Kelvin Kiu Wai Tam",
      "Jiaxin Bai",
      "Yangqiu Song",
      "Ginny Wong",
      "Simon See"
    ],
    "abstract": "Scientific ideation is the capacity to formulate novel and testable hypotheses from scientific evidence, and autonomous AI scientists depend on it. Existing evaluations largely assess it by asking models to generate ideas from a static, curated set of reference papers. That passive setup departs from the retrieval-and-reasoning workflow of modern AI scientists, and it becomes less discriminative as models improve. We introduce AgentIdeaBench, a multidisciplinary benchmark that evaluates scientific ideation under two matched settings, static observation and active exploration. We report matched Static-Active evaluations for 33 LLMs across 40 densely scored subfields spanning five disciplines, using a multidimensional, literature-verified scoring framework whose critics assess originality against retrieved prior art. Active exploration reveals considerably more capability headroom, and that headroom is unevenly distributed across models. Performance scales about twice as fast as under static observation, and the exploration gain is capability-gated, favoring the strongest models over the weakest. The gain reflects better grounding, improving feasibility, clarity, and specificity while leaving measured originality unchanged under our critics. We further explore Scientific World Modeling, a generation-time loop that refines a draft hypothesis through structured thought experiments. It benefits mid-capability models, and its impact diminishes among frontier models that appear to have internalized such reasoning patterns already. AgentIdeaBench gives future work on scientific ideation a measurement basis suited to the agent era.",
    "published": "2026-09-07T15:19:13Z",
    "updated": "2026-09-07T15:19:13Z",
    "categories": [
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2609.07611"
  },
  {
    "id": "2609.06359",
    "title": "AGSA-Net: Abundance-Guided Self-Attention Network for Spectral Unmixing-Aware Hyperspectral Remote Sensing Image Classification",
    "authors": [
      "Nafisa Anjum",
      "Satavisa Dey Borno",
      "Ananna Saha",
      "Mir Faiyaz Hossain",
      "Sifat Momen",
      "Nabeel Mohammed",
      "Shafin Rahman"
    ],
    "abstract": "Hyperspectral image (HSI) classification plays a vital role in remote sensing applications, including agriculture, environmental monitoring, and urban analysis. However, its performance remains challenged by high spectral redundancy, noise sensitivity, and the difficulty of jointly modeling local material composition and long-range spectral dependencies. To address this, we propose AGSA-Net, an abundance-guided self-attention network that explicitly integrates spectral unmixing priors into the classification process. AGSA Net first estimates physically meaningful subpixel abundance maps subject to non-negativity and sum-to-one constraints, regularized by hybrid linear-nonlinear reconstruction decoder. The learned abundances are then used to construct an abundance affinity prior that guides a spectral transformer to emphasize class-discriminative interactions, and the resulting transformer features are fused with compact abundance descriptors for final prediction; in contrast to existing approaches that use abundance as auxiliary or concatenated features. Experiments on Indian Pines, Augsburg, and Berlin demonstrate the benefit of incorporating abundance- guided contextual modeling, particularly in heterogeneous urban scenes. The source code and trained models are available at: https://github.com/nnuvi/AGSA-Net",
    "published": "2026-09-06T03:27:34Z",
    "updated": "2026-09-06T03:27:34Z",
    "categories": [
      "cs.CV",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2609.06359"
  },
  {
    "id": "2609.06356",
    "title": "MSCA-UNet: Multi-Scale Context and Attention U-Net for Image Segmentation",
    "authors": [
      "Sheng-Wei Chan"
    ],
    "abstract": "U-Net remains a practical baseline for image segmentation because of its simple encoder-decoder structure and skip connections. However, the bottleneck representation is still dominated by a limited set of receptive fields, while decoder features are propagated without explicitly emphasizing the most informative channels and spatial locations. This paper presents MSCA-UNet, a U-Net-based segmentation architecture that combines multi-scale contextual aggregation at the bottleneck with channel-spatial attention refinement in the decoder. The multi-scale module uses parallel atrous convolutions to capture contextual features at different receptive fields, while Convolutional Block Attention Modules (CBAMs) progressively recalibrate decoder features. Under identical experimental settings, the baseline U-Net achieves 96.9% mIoU on a held-out test set. Adding multi-scale context improves mIoU to 97.5%, while attention alone reaches 98.4%. Combining both mechanisms yields 99.1% mIoU, a 2.2 percentage-point improvement over the baseline. Parameter analysis further shows that the attention-only variant adds approximately 0.044M parameters, whereas the multi-scale module contributes most of the additional model capacity. The results support the view that multi-scale context enrichment and attention-based feature refinement provide complementary benefits within a U-Net framework.",
    "published": "2026-09-06T03:16:51Z",
    "updated": "2026-09-06T03:16:51Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.06356"
  },
  {
    "id": "2609.06353",
    "title": "ChildGaze: A Benchmark Dataset for Collaborative Behavior Understanding in Children",
    "authors": [
      "Sindhuja Penchala",
      "Saketh Reddy Kontham",
      "Prachi Bhattacharjee",
      "S. Nima Mahmoodi",
      "Daniel Fonseca",
      "Sareh Karami",
      "Mehdi Garemani",
      "Sudip Mittal",
      "Shahram Rahimi",
      "Noorbakhsh Amiri Golilarz"
    ],
    "abstract": "Understanding collaborative behavior in children is important for analyzing social participation, peer interaction, shared attention, and engagement during play and learning activities. Reliable recognition of these cues can support research in child development, educational analysis, and human-centered computer vision. However, estimating where a child is looking does not necessarily reveal whether the child is actively participating in a shared activity. To support this higher-level analysis, we introduce ChildGaze, a child-centered behavioral annotation dataset built on the ChildPlay video collection [1]. ChildGaze introduces two behavioral labels, collaborative and non-collaborative, assigned independently to each child within a frame. The dataset provides face, left-hand, and right-hand bounding boxes for children and adults and organizes the annotations at the row, person, and frame levels. The current release contains 27 annotated video files, 10,641 frames, and 73,268 body-part annotation rows. Annotation reliability was evaluated on 1,187 frames using independent annotations from two annotators. The collaboration labels achieved 93.16% raw agreement and a Cohen's kappa of 0.8631, while bounding-box annotations achieved an overall mean IoU of 0.808. Baseline experiments with pretrained ViT and Swin Transformer models achieved up to 97.44% child-person-level accuracy and 96.80% frame-level accuracy, respectively. These results show that ChildGaze provides a reliable benchmark for studying collaborative behavior in naturalistic child-adult and peer interactions.",
    "published": "2026-09-06T03:07:13Z",
    "updated": "2026-09-06T03:07:13Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.06353"
  },
  {
    "id": "2609.06343",
    "title": "Radiation, Rotation and Scale Invariant Feature Descriptor for Multimodal Image Matching",
    "authors": [
      "Yuanxin Ye",
      "Tengfeng Tang",
      "Tao Peng",
      "Zhiqiang Han",
      "Jiayuan Li",
      "Mi Wang"
    ],
    "abstract": "Multimodal image matching is a fundamental task for multi-source information fusion. However, geometric distortions and nonlinear radiometric differences (NRD) severely limit performance, especially under radiometric, rotation, and scale variations. To address this issue, we propose a radiation, rotation, and scale invariant (RRSI) feature descriptor. First, a dual-head regional sampling (DHRS) module simultaneously performs Cartesian and Log-Polar sampling on keypoint neighborhoods, retaining spatial structural properties while enhancing robustness to rotation and scale variations. We then jointly encode geometric and radiometric relations between multimodal images in a unified deep feature space, enabling feature encoding, interaction, and fusion across intra-modal, dual-head sampled, and inter-modal regions. Furthermore, we introduce a bidirectional cross-modal generative reconstruction constraint during training. By decoding implicit features into structural patches of the counterpart modality, this mechanism anchors modality-invariant geometric topologies without additional inference overhead. Experiments on optical-infrared and optical-SAR datasets demonstrate highly competitive matching performance and strong robustness to rotation and scale variations. RRSI supports the full rotation range from 0 to 360 degrees and scale factors up to four. Its generalization ability is further validated on multimodal images from computer vision, remote sensing, and medical imaging. The implementation will be made publicly available at https://github.com/yeyuanxin110/RRSI .",
    "published": "2026-09-06T02:32:03Z",
    "updated": "2026-09-06T02:32:03Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.06343"
  },
  {
    "id": "2609.06341",
    "title": "Linear Algebra Foundations of Efficient Attention: A Phase Reversal in Rank Collapse Under SVD Compression",
    "authors": [
      "Anjaneya Teja Sarma Kalvakolanu"
    ],
    "abstract": "Linear algebra provides the framework of concepts (matrix rank, singular value decomposition (SVD), and eigendecomposition) that modern artificial intelligence employs to encode, compress, and propagate information through neural networks. This paper unifies fourteen separate peer-reviewed works analyzing the usage of these techniques in the context of transformer-based foundation model research, focusing on three areas of the topic: derivations and properties of self-attention matrices' output rank, compression methods that purposefully utilize this phenomenon, and the low-rank key-value (KV) cache projection and its semiseparable-matrix duality to linear attention and state-space structured models. We were motivated to conduct this work after observing an open problem in this literature: the interplay of the mentioned compression methods with natural rank collapse of the network. With this paper, we report an original finding that using SVD compression of attention projections actually has the opposite effect on the rank collapse of the network: while it strongly suppresses it at initialization, it accelerates on pretrained models (for GPT-2 124M, GPT-2 Medium 355M, and Pythia-160M) with minimal risk of object aliasing artifacts appearing (verified on all compression ratios) and is consistent across four rank estimation methods. A controlled causal decomposition of the effect in both settings showed that the reason for this behavior can be explained by the choice of the subspace SVD makes when compressing the matrix better than the reduction of the operator norm it achieves, explaining roughly 76% of the effect at initialization and 83% on the pretrained weights, providing a refinement to the calibration-aware compression viewpoint and an explanation of why it outperformed naive SVD truncation.",
    "published": "2026-09-06T02:27:01Z",
    "updated": "2026-09-06T02:27:01Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "cs.NE"
    ],
    "url": "https://arxiv.org/abs/2609.06341"
  },
  {
    "id": "2609.06338",
    "title": "One Shared LoRA Weight for MRI Reconstruction across Acceleration Factors",
    "authors": [
      "Zhiwei Zhao",
      "Weikang Gong",
      "Zhongnian Li",
      "Xinzheng Xu"
    ],
    "abstract": "Accelerated MRI reconstruction recovers images from undersampled k-space. However, different acceleration factors produce distinct artifact patterns. Existing methods often train separate models for each factor, leading to poor cross-factor generalization and high training and storage costs. We propose Shared LoRA, a parameter-efficient framework that freezes the pretrained SHFormer backbone and trains a single shared set of LoRA adapters together with a lightweight gating network. During training, undersampled inputs are generated by randomly sampling acceleration factors and their corresponding sampling masks, enabling the shared adapters to learn reconstruction knowledge across factors. Given the acceleration factor, GateNet generates layer-wise coefficients to dynamically modulate the residual strength of each adapter. Experiments show that Shared LoRA achieves the best or competitive PSNR and SSIM across acceleration factors, while its trainable parameters account for only about 5.3% of the total model parameters. Its performance at lower acceleration factors remains largely unaffected as the jointly trained factor set expands, and it generalizes stably to unseen neighboring factors.",
    "published": "2026-09-06T02:23:24Z",
    "updated": "2026-09-06T02:23:24Z",
    "categories": [
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2609.06338"
  },
  {
    "id": "2609.06320",
    "title": "FrankenReport: Early Exiting in Long-Form Generation Using Expected Value of Computation",
    "authors": [
      "Zhengping Jiang",
      "Gonzalo Ramos",
      "Jina Suh",
      "Shiqian Rachel Ng",
      "Elias Stengel-Eskin",
      "Justin Svegliato",
      "Benjamin Van Durme",
      "Andy Huntington",
      "Sam Thomson"
    ],
    "abstract": "While deep research systems address interactive information-seeking needs impressively, their real-world deployments face latency and resource-consumption challenges. We present FrankenReport, an interface for long-form knowledge-seeking report generation that supports adaptive early exiting per section: it evaluates intermediate outputs during generation and predicts whether further targeted computation will yield significant quality gains. In a simulation study, FrankenReport outperforms random allocation baselines by a large margin (up to 4x) under low budgets and smoothly recovers full-pipeline quality as the budget grows, showing that future quality gains are predictable from intermediate drafts. Through experiments and user studies, we further show that despite varying preferences across users and topics, FrankenReport adapts to simple, natural user feedback as efficiently as methods requiring much costlier supervision such as generated drafts and explicit rationales.",
    "published": "2026-09-06T00:43:52Z",
    "updated": "2026-09-06T00:43:52Z",
    "categories": [
      "cs.HC",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2609.06320"
  },
  {
    "id": "2609.06316",
    "title": "Deep learning from the crowd Fundamentals of morphological galaxy classification",
    "authors": [
      "Luis Enrique Sucar",
      "Carlos del Burgo",
      "Jonathan Serrano-Pérez"
    ],
    "abstract": "Aims. The objective of this work is to adapt a deep neural network model to perform galaxy morphological classification trained from crowd annotations, considering the training scheme, the agreement between the annotators, and the hierarchy. Methods. We use Galaxy Zoo 1 as our experimental testbed and trained a convolutional neural network (CNN) for the automatic classification of galaxies' morphologies. We analyze the impact of the following aspects on the classification accuracy and training efficiency: (i) Training only the last layer vs. training all the network; (ii) Classification with only the CNN vs. considering the hierarchy; (iii) Comparing the models trained with different amounts of data and levels of agreement between the annotators; (iv) Training by stages, transferring knowledge from one model to another; and (v) Combining several models as an ensemble. Results From the experiments, we derive the following results: (i) Training all the layers in the network significantly improves the accuracy (10% increase in exact match), compared to training only the last layer; (ii) There is a tradeoff between the amount of data and the level of agreement between the annotators used for training; (iii) Using the hierarchy can improve accuracy when the amount of training data is reduced; (iv) Training by stages through transfer learning (curriculum learning) produces higher accuracy for limited data; (v) Ensembles can improve accuracy; (vi) Models achieve a low accuracy for the most difficult cases, but, if we consider hierarchical measures, we can derive useful results for upper levels in the hierarchy. An accuracy above 99% is achieved when training all layers of the network and considering a high agreement between the annotators. Conclusions. Training deep learning models from crowd annotations involves additional challenges than learning from hard annotations.",
    "published": "2026-09-06T00:36:30Z",
    "updated": "2026-09-06T00:36:30Z",
    "categories": [
      "astro-ph.GA",
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2609.06316"
  },
  {
    "id": "2609.06302",
    "title": "CST-WM: A Causally Structured World Model for Embodied Visual Tracking",
    "authors": [
      "Junyi Hu",
      "Shuaihang Yuan",
      "Yi Fang"
    ],
    "abstract": "Embodied visual tracking requires a robot not only to react to the current view, but to choose actions that preserve or recover future evidence of a moving target under ego-motion, occlusion, and distractors. It is therefore a predictive decision problem over future target observability and apparent scale. A central difficulty is a task-specific form of causal hallucination: in action-conditioned prediction, a model can exploit the strong correlation between robot control and target-related observations by hallucinating a direct causal effect from the current action to target evidence, rather than letting action influence that evidence only through robot motion and the resulting observation change. The shortcut yields plausible futures with the wrong semantics for tracking-oriented planning and re-acquisition. We propose CST-WM, a causally structured world model that decomposes the latent state into target-evidence, robot, and observation branches and factorizes the transition so that direct action injection into the target-evidence branch is blocked, while action remains available to robot motion and observation updates. Combined with rollout-based model-predictive control, CST-WM supports both stable following and temporary target re-acquisition in one planning framework. On EVT-Bench and Habitat 3.0, covering standard tracking, target-loss recovery, and cross-dataset transfer, it improves following quality, distance-range control, safety, and re-acquisition over reactive and world-model baselines; offline diagnostics show better multi-step rollout fidelity, stronger planning-value consistency, and substantially reduced direct action leakage. For embodied visual tracking, future prediction alone is not enough: the predictive structure itself must align with how target evidence enters planning.",
    "published": "2026-09-05T23:24:32Z",
    "updated": "2026-09-05T23:24:32Z",
    "categories": [
      "cs.CV",
      "cs.RO"
    ],
    "url": "https://arxiv.org/abs/2609.06302"
  },
  {
    "id": "2609.06296",
    "title": "SignDino: Self-Supervised Sign Language Representation Learning via Temporal-Axis Self-Distillation",
    "authors": [
      "Junyi Hu",
      "Zhewen He",
      "Haomian Huang",
      "Zhenhua Li",
      "Zhifei Li",
      "Yi Fang"
    ],
    "abstract": "Self-supervised sign language representation learning must model two properties not central to natural-image SSL: signs are produced by a small set of anatomically distinct articulators, and their meaning depends on the temporal organisation of those articulators. We introduce SignDino, a self-supervised sign-video encoder that moves the DINOv3 student--teacher recipe from the spatial domain of image crops to the temporal domain of tracked sign streams. Each video is decomposed into left-hand, right-hand, and face streams by a detector-first YOLOv8n+ByteTrack pipeline. A frozen DINOv3 ViT-B/16 embeds each per-frame anatomical crop, while lightweight temporal Transformers, not the image backbone, form the student and EMA teacher. They are trained by temporal DINO self-distillation, frame-level masked-token prediction in the style of iBOT, KoLeo feature spreading, and Gram anchoring of the frame-to-frame similarity structure. This design keeps strong image-level visual primitives fixed and learns only how articulator states evolve across time. We evaluate on sign-to-English translation, isolated sign recognition, and fingerspelling detection benchmarks. Across these tasks, SignDino provides a strong public self-supervised representation and shows competitive or state-of-the-art performance under matched downstream evaluation.",
    "published": "2026-09-05T23:08:37Z",
    "updated": "2026-09-05T23:08:37Z",
    "categories": [
      "cs.CV",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2609.06296"
  },
  {
    "id": "2609.06289",
    "title": "Steering Geometry: Validating Human Value Geometry in LLM Steering Space",
    "authors": [
      "Mohammad Mahdi Abootorabi",
      "Armin Saghafian",
      "Ali Bazshoushtari",
      "Hamid Rezaei",
      "EunJeong Hwang",
      "Vered Shwartz",
      "Parvin Mousavi",
      "Purang Abolmaesumi"
    ],
    "abstract": "As large language models (LLMs) are increasingly deployed in alignment-sensitive contexts, activation steering has emerged as a lightweight, inference-time alternative to fine-tuning methods (e.g., RLHF, DPO) for behavioral control. However, existing work typically validates steering on isolated behaviors, leaving it unclear whether steering vectors encode coherent semantic structure or merely exploit behavior-specific shortcuts. We investigate whether the latent geometry of LLM steering vectors reflects theory-specified structure in human values and morality. Using Schwartz's Theory of Basic Human Values as our primary fine-grained framework, we introduce a 26K-sample benchmark covering 20 human values and analyze distribution-driven methods (e.g., CAA, SphericalSteer, ODESteer) and behavior-centric approaches (e.g., COLD-Steer, BiPO) across diverse model families and sizes. We find that distribution-driven methods recover human value topologies aligned with theoretical predictions (Spearman $ρ$ up to 0.51, $p < 10^{-13}$). In contrast, behavior-centric methods achieve comparable steering performance but show little correlation with the expected value geometry. Geometric fidelity improves with model scale but drops after instruction tuning. Finally, better geometric alignment also leads to more human-consistent transfer across values: steering one value correctly lifts compatible values and suppresses opposing ones. Code and data are available at: https://github.com/DeepRCL/Steering_Geometry.",
    "published": "2026-09-05T22:55:48Z",
    "updated": "2026-09-05T22:55:48Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2609.06289"
  },
  {
    "id": "2609.06288",
    "title": "Object-Aware Background-Controlled Editing via Weighted Velocity Guidance",
    "authors": [
      "Wuji Wang",
      "Yue Wu",
      "Chenhao Yi",
      "Shuhui Wang"
    ],
    "abstract": "Training-free image editing steers diffusion or flow-matching generative models at inference time by modifying prompt-conditioned denoising velocities. Existing velocity-based editors often apply prompt-induced residuals globally over the latent space and rely on the model to localize semantic changes implicitly. For object-centric edits, these residuals are rarely zero outside the target object, so small non-target components can accumulate during multi-step integration, causing background drift and unstable object boundaries. We propose Object-Aware Velocity Control (OAVC), a training-free framework that introduces object-level control into the velocity-integration process. OAVC decouples where semantic residuals are allowed to act from how they are injected into the dynamics. It constructs a background-anchored reference interface under the source prompt and then performs object-localized safe semantic injection under the target prompt. A constrained injection operator suppresses drift-inducing velocity components, while time-adaptive spatial weighting stabilizes the transition near object boundaries. OAVC requires no training or modification of pretrained model parameters. Experiments on object-centric image and video benchmarks with image and video rectified-flow backbones show improved background preservation, structural fidelity, boundary stability, and temporal consistency while retaining effective localized editability.",
    "published": "2026-09-05T22:53:58Z",
    "updated": "2026-09-05T22:53:58Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.06288"
  },
  {
    "id": "2609.06072",
    "title": "ACE: Adapter Consolidation across Experts for Parameter-Efficient Fine-Tuning of MoE LLMs",
    "authors": [
      "Ahin Lee",
      "Sehyun Yun",
      "Joonha Park",
      "Taesik Gong"
    ],
    "abstract": "Parameter-efficient fine-tuning (PEFT) of mixture-of-experts (MoE) models commonly attaches a separate low-rank adapter to each expert. This expert-wise design fragments adaptation in three ways: capacity is split across narrow low-rank updates, gradient supervision becomes sparse and imbalanced under sparse routing, and execution is decomposed into many small GEMMs. We find that such expert-wise separation is often unnecessary, as subsets of LoRA adapters become functionally similar during fine-tuning, revealing redundancy among expert-specific adapters. Based on this redundancy, we propose ACE (Adapter Consolidation across Experts), which groups redundant experts and replaces their expert-specific adapters with group-shared higher-rank LoRA modules under the same PEFT budget. ACE further introduces grouped adapter execution, which consolidates fragmented expert-wise adapter computations into fewer, larger group-level GEMMs. Across evaluations covering 12 datasets and four MoE backbones, ACE achieves the highest observed mean accuracy among the parameter-matched PEFT methods on the three backbones with complete baseline coverage, while providing $1.31\\times$ to $1.48\\times$ wall-clock training speedup over expert-wise LoRA without increasing peak memory. Our code is available at https://github.com/UbiquitousAILab/ACE.",
    "published": "2026-09-05T13:05:01Z",
    "updated": "2026-09-05T13:05:01Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2609.06072"
  },
  {
    "id": "2609.06071",
    "title": "Generating Instance Generators in PDDL Planning",
    "authors": [
      "Nicola J. Müller",
      "Naya Rudolph",
      "Katharina Stein",
      "Jörg Hoffmann",
      "Ayal Taitler",
      "Timo P. Gros"
    ],
    "abstract": "PDDL, the de-facto standard language in the AI Planning community, is designed to specify planning domains: sets of instances that share the same predicates and action schemas. Yet it does not provide any means to specify the actual instance set, i.e., legality constraints on initial states and goal conditions, as well as possibly domain subset constraints specifying an instance subset we are interested in. One consequence of this is that instance generation has always been ad-hoc, with manually written domain- and subset-specific instance generators. Recent work has started to address this, through reasoning and learning methods that however suffer from scalability limitations. Here we introduce an alternative approach, leveraging LLMs to generate instance-generation programs, with built-in soundness guarantees through prescribed checks. We show that these automatically generated instance generators return large numbers of sound and diverse instances efficiently.",
    "published": "2026-09-05T13:04:22Z",
    "updated": "2026-09-05T13:04:22Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.06071"
  },
  {
    "id": "2609.06064",
    "title": "The Role of Gradient Modification in Heavy-Tailed Nonconvex Stochastic Min-Max Optimization",
    "authors": [
      "Tianxi Zhu",
      "Yi Xu",
      "Xiangyang Ji"
    ],
    "abstract": "Stochastic min-max optimization has attracted increasing attention due to its applications in modern machine learning, while existing theoretical studies mainly rely on the bounded variance assumption for stochastic gradients. Under heavy-tailed noise, where stochastic gradients only possess a finite $p$-th moment for $p\\in(1,2]$, gradient clipping or normalization is commonly believed to be necessary to guarantee convergence. In this work, we revisit stochastic min-max optimization under heavy-tailed noise and provide a comprehensive theoretical study of stochastic gradient descent ascent (SGDA). We first show that vanilla SGDA, without any modification to its update rule, can converge under heavy-tailed noise in both nonconvex-strongly-concave (NC-SC) and nonconvex-concave (NC-C) settings, establishing the first convergence guarantees for SGDA in these regimes. Beyond unregularized problems, we further investigate regularized stochastic min-max optimization, where directly incorporating gradient normalization into proximal updates is nontrivial due to the incompatibility between normalization and proximal structures. We overcome this difficulty by developing new clipping-free algorithms, i.e., Stoc-TRGDAM and Stoc-TRGDmax, and they both can achieve the optimal dependence on the target accuracy without using gradient clipping.",
    "published": "2026-09-05T12:49:28Z",
    "updated": "2026-09-05T12:49:28Z",
    "categories": [
      "math.OC",
      "cs.AI",
      "stat.ML"
    ],
    "url": "https://arxiv.org/abs/2609.06064"
  },
  {
    "id": "2609.06063",
    "title": "Explaining AI Agents Through Execution Traces",
    "authors": [
      "Vittoria Vineis",
      "Fabiano Veglianti",
      "Lorenzo Antonelli",
      "Claudia Di Carlo",
      "Matteo Silvestri",
      "Gabriele Tolomei"
    ],
    "abstract": "AI Agents are increasingly deployed in real-world settings, where they interact with external tools and make sequential decisions with limited human oversight. This creates a pressing need for reliable and auditable explanations of what an agent did and why. However, traditional Explainable AI (XAI) methods fall short of providing the process-level transparency required for such interactive, multi-step systems, motivating a paradigm shift toward approaches specifically designed for AI Agents. To address this gap, we present a post-hoc XAI framework that transforms a lengthy agent's execution trace into a structured report and a faithful natural-language explanation explicitly grounded in its observable behavior. Because it relies solely on execution traces, the framework applies across different agent architectures, environments, and tasks. Human and automated evaluations across multiple benchmarks and architectures show that our framework produces high-quality, trace-faithful explanations while reliably identifying unsupported claims, unjustified actions, and evidence gaps, outperforming naive LLM-generated explanations.",
    "published": "2026-09-05T12:45:56Z",
    "updated": "2026-09-05T12:45:56Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.06063"
  },
  {
    "id": "2609.06060",
    "title": "Calendar-SPCA: Interpretable Representation Learning for Multi-Periodic Electricity Consumption Profiles",
    "authors": [
      "Carlos Quesada-Granja",
      "Tony Castillo-Calzadilla",
      "Carlos Rizo-Maestre"
    ],
    "abstract": "Long-term electricity-consumption profiles exhibit several simultaneous periodic structures, including daily, weekly, and annual cycles. This work introduces Calendar-SPCA, a calendar-structured sparse principal component method that incorporates this known multi-periodic geometry directly into low-dimensional representation learning. The feature domain is represented as the Cartesian product of cyclic calendar axes, and a low-rank factorization is estimated using an L1 loading penalty together with graph total variation over the resulting calendar graph. The method therefore produces sparse and locally coherent loading patterns that remain directly readable in their original temporal coordinates. Calendar-SPCA is evaluated on two independent smart-meter datasets with different sample sizes and temporal resolutions: GoiEner and Low Carbon London. A factorial experiment characterizes the complementary effects of sparsity and calendar coherence and examines robustness across sample size, latent dimensionality, and repeated fits. At rank 15, Calendar-SPCA retains 96.92% and 82.90% of the explained variance of rank-matched PCA in GoiEner and Low Carbon London, respectively, while producing mean loading sparsities of 61.95% and 81.50%. Comparisons with classical sparse PCA and SPCA-TV further show that Calendar-SPCA adds a systematic organization of the latent factors in the original calendar coordinates while preserving substantial low-rank information. The resulting components form coherent and complementary daily, weekly, seasonal, and jointly localized calendar patterns, with dataset-specific geometries across the two datasets.",
    "published": "2026-09-05T12:43:18Z",
    "updated": "2026-09-05T12:43:18Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.06060"
  },
  {
    "id": "2609.06059",
    "title": "DAREBench: Deployment-Aware and Reliable Evaluation of Models as Agents",
    "authors": [
      "Yu Liu",
      "Zhilin Liu",
      "Zhiwei Yang",
      "Shaojie Zhang",
      "Zheyuan Deng",
      "Tingwei Huang",
      "Zhenbo Luo",
      "Lei Jiang",
      "Yanbing Liu",
      "Pei Fu"
    ],
    "abstract": "As large language models evolve from question-answering systems into general-purpose agents, evaluation must move beyond static answer correctness to assess multimodal perception, multi-step execution, tool use, and artifact delivery. However, existing benchmarks are often tied to specific task types, execution environments, or scoring protocols, limiting their comparability, interpretability, and reliability for deployment decisions. We introduce DAREBench (Deployment-Aware and Reliable Evaluation of Models as Agents), a benchmark designed to capture workload variation and support reliable agent evaluation. Built on a shared OpenClaw execution environment, DAREBench organizes 233 tasks selected and adapted from 22 source benchmarks into a $2\\times3$ workload matrix defined by input modality and execution form, and evaluates them under a unified contract-based protocol with evidence-based score auditing. We evaluate 23 commercial API models and 12 locally deployed open-weight models over 7,587 model--task runs, reporting accuracy and token consumption alongside reference costs for API models. Results show that no single model dominates all workload groups, text and multimodal tasks exhibit distinct accuracy--cost trade-offs, and local open-weight models are competitive in several groups but still trail frontier commercial models overall. These findings suggest that agent deployment and model selection should consider workload profiles, deployment mode, and accuracy--cost trade-offs rather than rely on a single aggregate score.",
    "published": "2026-09-05T12:36:59Z",
    "updated": "2026-09-05T12:36:59Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.06059"
  },
  {
    "id": "2609.06058",
    "title": "GradeTrap: Authority Cues in Images Shift VLM Judgments Despite Explicit Instructions to Ignore Them",
    "authors": [
      "Deep Dessai"
    ],
    "abstract": "As vision-language models (VLMs) become increasingly capable and are deployed in consequential real-world settings, they must evaluate evidence independently rather than defer uncritically to human authority. We introduce GradeTrap, a controlled evaluation that places two social cues in direct conflict: a student answer, which should attract sycophantic agreement, and a conflicting answer attributed to a peer, teacher, or official answer key, which should attract authority-based deference. Models produce free-form answers while being explicitly instructed to solve independently and ignore all student answers, feedback, and grading marks. We test the models on 60 synthetic real-world trade-off scenarios. Five neutral trials establish a stable model-relative preference, followed by three repetitions of six experimental cues including controls. On the 45-item common intersection across Gemini 3.5 Flash-Lite, GPT-5.6 Luna, and Claude Haiku 4.5, a generic second-answer control yields 5.4% conflicting-answer selection. Relative to that control, pooled within-item changes show no reliable peer-review effect, a 6.9-point teacher-review effect, and a 19.5-point official-key effect. In contrast, a displayed conflicting student answer alone compared to a displayed student reference answer alone only raises selection from 2.2% to 5.2%. Official-key provenance therefore redirects judgements more than a student answer or the generic second-answer control, despite an explicit ignore instruction and an opposing student answer given along with the official key. Effects vary in magnitude across the three models.",
    "published": "2026-09-05T12:30:39Z",
    "updated": "2026-09-05T12:30:39Z",
    "categories": [
      "cs.CV",
      "cs.CL",
      "cs.CY",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2609.06058"
  },
  {
    "id": "2609.06055",
    "title": "DriveZero: End-to-End Driving Beyond Human Demonstrations",
    "authors": [
      "Hao He",
      "Chengcheng Hu",
      "Zirun Su",
      "Heng Zhang",
      "Haisong Liu",
      "Jinke Li",
      "Haochen Tian",
      "Zhenwei Shen",
      "Hongyang Li",
      "Zhichao Li",
      "Yunchen Yang",
      "Bochao Huang",
      "Siyu Zhang",
      "Kuangye Chen",
      "Xiongjie Zhang",
      "Wentao Dai",
      "Hengchen Dai",
      "Siyuan Liu",
      "Zehao Huang",
      "Naiyan Wang"
    ],
    "abstract": "Most end-to-end autonomous-driving systems learn by imitating human driving logs, leaving their learned behavior constrained by the quality and behavioral coverage of the recorded trajectories. This report presents DriveZero, an end-to-end system that learns driving behavior beyond human demonstrations. It decomposes driving into a perception model and an action model, pretrains each in the regime best suited to it, and combines them into one end-to-end planner. The two models call for different learning recipes: perception must understand the world, and benefits from massive and diverse visual data; action must interact with it, and requires closed-loop feedback. On the action side, we introduce DriveRL, a mixed-agent closed-loop reinforcement-learning framework. It converts real driving logs into interactive worlds, where a privileged teacher policy is trained with PPO through closed-loop rollouts. For the perception model, DriveVFM consolidates multiple frozen vision foundation models, including DINOv3, SigLIP2, SAM and Depth Anything V2, into a single backbone from raw images alone, requiring no task-specific annotations. DriveZero then unifies the two: a camera-only planner that distills the frozen DriveRL teacher through its rolled-out trajectories. The goal-conditioned teacher can moreover be queried under augmented driving intents, yielding diverse, goal-consistent supervision that logged data cannot provide. On nuPlan, DriveRL with value-guided test-time action search achieves a mean score of 93.57 across the Val14, Test14-hard, and Test14-random community splits in both non-reactive and reactive modes, exceeding the Log-Replay expert on all three splits. DriveZero achieves state-of-the-art performance on NAVSIMv1, NAVSIMv2 and the closed-loop HUGSIM benchmark without any human trajectory supervision.",
    "published": "2026-09-05T12:20:38Z",
    "updated": "2026-09-05T12:20:38Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.06055"
  },
  {
    "id": "2609.06052",
    "title": "SkillSpec: Intent-Masked Specification Reasoning for Agent Skill Correctness",
    "authors": [
      "Yizhuo Zhang",
      "Bo Kang",
      "Yi Yang",
      "Zhiyu Duan",
      "Zhouteng Ye",
      "Shunkun Yang"
    ],
    "abstract": "Autonomous agent systems increasingly depend on reusable skill abstractions for consolidating experiential knowledge and domain expertise. These artifacts typically bundle free-form instructions with heterogeneous resources. However, ensuring their correctness remains challenging. Their failure modes transcend conventional code defects to subtle semantic inconsistencies such as intent conflicts, which manifest as silent failures masked by the underlying model. Moreover, skill correctness must be grounded in intended task boundaries and generalizability. We propose SkillSpec, a Hoare-style framework that formulates skill correctness as a specification reasoning problem. It transforms a heterogeneous skill repository into a unified graph representation that aligns descriptions, instructions and code artifacts. For each node, SkillSpec derives an ExpectSpec from the surrounding declared intent, and infers FactSpecs from encoded behavior under partially disclosed intent. An intent mask regulates access to holistic, lineage, neighborhood, and local views to balance the bias introduced by excessive context against unsupported inference caused by insufficient context. SkillSpec jointly reasons over these views to flag candidate defects, and automatically validates them in an isolated sandbox. On 515 real-world skills from SkillsBench and widely downloaded repositories, SkillSpec identified 763 manually confirmed defects across 239 skills, achieving 61.2% precision. The node-level analysis across multiple model families shows that specification reasoning is consistently reliable for code nodes, whereas plain-text nodes remain a major bottleneck. Most defects arise at the boundaries between declared intent and implementation, demonstrating that explicit specifications provide a practical foundation for skill quality assurance in real-world agent ecosystems.",
    "published": "2026-09-05T12:17:02Z",
    "updated": "2026-09-05T12:17:02Z",
    "categories": [
      "cs.SE",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.06052"
  },
  {
    "id": "2609.09203",
    "title": "OpenDiscoveryTrace: Process Traces for Evaluating AI Scientist Workflows",
    "authors": [
      "Aayam Bansal",
      "Keertan Balaji"
    ],
    "abstract": "Existing benchmarks for autonomous AI scientists evaluate only final outputs---generated code, hypotheses, or papers---yet discard the reasoning process by which those outputs were obtained. This makes it impossible to audit scientific methodology, diagnose failure modes, or distinguish systematic reasoning from fortunate guessing. We present \\textbf{OpenDiscoveryTrace}, a public dataset of 558 complete AI scientific agent trajectories that captures how models reason, not just what they produce. Each trajectory records a structured 9-field-per-step trace---including thoughts, tool calls, observations, errors, revision triggers, and self-reported confidence---as models execute 124 scientific tasks spanning drug discovery, materials science, genomics, and scientific literature analysis. The dataset covers seven models: three frontier models (GPT-5.4, Claude Opus 4.6, and Gemini 3.1 Pro; 124 trajectories each, fully balanced across domains and difficulty levels) and four open-weight models (Qwen2.5-7B, Mistral-7B-v0.3, Phi-3.5-mini, and Qwen2.5-1.5B; 30 each), plus 60 live-retrieval variant trajectories. Pilot analysis on 363 LLM-judged trajectories reveals that process traces expose behavioral differences invisible to output-only evaluation: all three frontier models achieve comparable success rates (84--89%), yet Claude Opus 4.6 produces 30$\\times$ more errors than GPT-5.4 (2.5 vs. 0.08 per trajectory, $p < 0.0001$, Cliff's $δ= 0.613$), with qualitatively different error profiles---66.7% tool misuse for Claude versus 83.6% reasoning errors for GPT-5.4. We define five benchmark tasks with baselines from logistic regression, random forests, LSTMs, and Transformer models. The dataset, trace schema, agent harness, and benchmark definitions are publicly available under CC BY 4.0 to support research on process-level evaluation, scientific agent auditing, and AI governance.",
    "published": "2026-09-05T12:16:47Z",
    "updated": "2026-09-05T12:16:47Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.09203"
  },
  {
    "id": "2609.06051",
    "title": "Image-Scale Robustness and Visual Recognition Performance: A Cross-Architecture Analysis",
    "authors": [
      "Anish Monsley Kirupakaran"
    ],
    "abstract": "The sensitivity of visual recognition models to changes in image scale is well established, yet the factors governing this sensitivity across heterogeneous architectures remain unclear. In this work, we investigate whether scale robustness exhibits a common quantitative structure across modern vision models. We evaluate 20 pretrained ImageNet-1K classifiers spanning seven architectural families, including convolutional, mobile, efficient, and Transformer-based architectures. By systematically reducing input image scale, we construct scale-accuracy response curves and define a characteristic scale as a compact measure of the onset of substantial recognition degradation. We then examine the relationship between characteristic scale and baseline recognition accuracy, model parameter count, architectural family, and representation stability. A strong inverse association is observed between baseline accuracy and characteristic scale (Pearson r = -0.890, R^2= 0.792, p < 10^-6). This relationship remains stable under bootstrap resampling, leave-one-architecture-out analysis, and leave-one-family-out analysis. In contrast, parameter count provides negligible additional explanatory power after controlling for baseline accuracy (p = 0.80), while architectural family does not provide significant incremental explanatory power. Furthermore, characteristic scale shows essentially no association with representation stability (r = -0.003, p = 0.991). These results indicate that, across the studied models, scale robustness is strongly organized by baseline recognition performance rather than simply by model size, architectural family, or representation stability. The study provides an empirical framework for characterizing scale robustness across vision architectures and identifies a reproducible accuracy-scale regularity that warrants further theoretical investigation.",
    "published": "2026-09-05T12:12:00Z",
    "updated": "2026-09-05T12:12:00Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.06051"
  },
  {
    "id": "2609.06050",
    "title": "A solution to the Erdős Problem #1040",
    "authors": [
      "Ioannis Tzachristas"
    ],
    "abstract": "For a compact set $K\\subset\\mathbb{C}$, let $\\vartheta(K)$ be the infimum of the planar areas of the unit lemniscates of all monic polynomials with zeros in $K$, allowing arbitrary degree and repeated zeros. We prove that $\\vartheta(K)=0$ whenever $\\operatorname{cap}(K)=1$, with no regularity assumption on $K$. The proof uses a centered harmonic polynomial that is positive on all but a set of arbitrarily small area in the polynomial hull of $K$. A Fourier average of exterior harmonic measures realizes this polynomial as the logarithmic potential of a signed measure having bounded density with respect to the equilibrium measure. A positive perturbation and an $L^1$ approximation by empirical measures then produce the required polynomials. This extends the smooth-boundary result of Krishnapur, Lundberg, and Ramachandran to arbitrary compact sets of capacity one. Together with the capacity-greater-than-one theorem of Ghosh and Ramachandran and an elementary argument for unbounded sets, it follows that $\\vartheta(F)=0$ for every closed infinite set $F\\subset\\mathbb{C}$ of transfinite diameter at least one, answering the vanishing question in Erdős Problem 1040.",
    "published": "2026-09-05T12:11:52Z",
    "updated": "2026-09-05T12:11:52Z",
    "categories": [
      "math.CA",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.06050"
  },
  {
    "id": "2609.04902",
    "title": "Sound-based Multi-Person 3D Pose Estimation",
    "authors": [
      "Yusuke Oumi",
      "Yuto Shibata",
      "Go Irie",
      "Akisato Kimura",
      "Yoshimitsu Aoki",
      "Mariko Isogawa"
    ],
    "abstract": "Can we recover the 3D poses of multiple people using only sound? This paper presents the first attempt to estimate multi-person 3D poses solely from acoustic signals. Estimating the poses of multiple individuals using acoustic signals is inherently challenging due to the superposition of motion-dependent signal variations. Unlike single-person scenarios, the presence of multiple subjects leads to overlapping acoustic signatures, making it difficult to attribute specific signal changes to an individual's pose. Furthermore, the complexity is compounded by inter-person reflections, which introduce intricate propagation delays that obscure the temporal motion-acoustic relationship. To address these issues, we propose SoundMHPE (Sound-based Multi-person Human Pose Estimator), a novel encoder-decoder framework consisting of two key components. First, the Acoustic Multi-scale Encoder captures diverse temporal and fine-grained frequency features to isolate subtle acoustic signatures from complex, overlapping signals. Second, the Temporal Pose Decoder employs an attention mechanism to disentangle multi-person information across successive frames. By jointly accounting for temporal dynamics and inter-person dependencies, this component precisely reconstructs frame-wise individual poses. To validate our approach, we constructed the 6-hour Acoustic Multi-person Pose (AMP) dataset consisting of 432K synchronized frames of multi-person pose and acoustic data, and demonstrated that our SoundMHPE outperforms baseline models. Project page: https://oumi03.github.io/sound-mhpe/",
    "published": "2026-09-04T09:02:11Z",
    "updated": "2026-09-04T09:02:11Z",
    "categories": [
      "cs.CV",
      "cs.AI",
      "cs.LG",
      "cs.RO",
      "cs.SD"
    ],
    "url": "https://arxiv.org/abs/2609.04902"
  },
  {
    "id": "2609.04901",
    "title": "Adaptation Interfaces for In-Context Tabular Foundation Models in Time-to-Event Prediction",
    "authors": [
      "Minh-Khoi Pham",
      "Luca Cotugno",
      "Dan Cernei",
      "Alina Sirbu",
      "Stefano Masi",
      "Giuseppe Prencipe",
      "Alessandro Pingitore",
      "Patrizia Landi",
      "Working Group on Uric Acid",
      "Cardiovascular Risk of the Italian Society of Hypertension",
      "Tai Tan Mai",
      "Martin Crane",
      "Marija Bezbradica"
    ],
    "abstract": "Tabular foundation models (TabFMs) achieve strong performance on structured data, particularly for standard classification and regression problems. Yet, extending them to censored time-to-event prediction is challenging because it requires properly handling censoring and event-time dynamics. Building on our prior work, we further link TabFMs with CoxPH and DeepHit and revise the context-resampled training procedure. We evaluate temporal zero-shot reformulation, classification-based fine-tuning, and survival-head adaptation using frozen TabFM backbones on 74 single-risk data sets, and we additionally study 4 competing-risk data sets. Zero-shot inference is effective on smaller single-risk data sets, whereas supervised adaptation becomes increasingly advantageous as data sets scale. Cox provides the most reliably strong interface, especially for Integrated Brier Score (IBS) on larger data sets. DeepHit is relatively stronger for the time-dependent Concordance Index than for IBS, while cause-specific MTLR ranks highest among the TabFM survival heads in the four-data-set competing-risk analysis. Classification fine-tuning becomes more competitive with zero-shot inference as data sets grow but remains weaker for probabilistic prediction. Overall, our results indicate that effective TabFM transfer depends on the data regime and on the statistical structure represented by the chosen adaptation interface. The implementation scripts used for this work are available at https://github.com/kaylode/survival-fm.",
    "published": "2026-09-04T09:01:16Z",
    "updated": "2026-09-04T09:01:16Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.04901"
  },
  {
    "id": "2609.04898",
    "title": "RefactorPlatform: An Open-Source Harness for Controlled Evaluation of Repository-Scale Refactoring Agents",
    "authors": [
      "Aziz Ben Amor",
      "Drish Mali",
      "Mann Acharya",
      "Vijayasri Iyer",
      "Sébastien Bratières"
    ],
    "abstract": "Repository-scale refactoring requires coding agents to propagate a single change across many interdependent files without altering program behavior, yet to our knowledge no existing harness isolates the design choices that determine agent success on this task. We present RefactorPlatform, an open-source evaluation harness that holds the environment fixed and varies each design axis explicitly: model backbone (via OpenRouter and GitHub Copilot CLI), execution regime (baseline, retrieval-augmented, and multi-agent), and prompt specificity. Each run executes in an isolated workspace with live terminal streaming, per-task logging of tokens, diffs, and transcripts, AST-based verification, and exportable telemetry for audit and reproduction. Demonstrating the platform on 100 multi-file RefactorBench tasks across four model families, we illustrate the analyses it supports: AST-aware chunking outperforms naive token-window chunking by 25-30% across prompt modes, whereas naive retrieval falls below the retrieval-free baseline; a lean retrieval-augmented single agent (86%) beats the sub-agent configuration we evaluated (66%) on matched tasks with no task passing under delegation that fails under retrieval; and retrieval's accuracy gains absorb its token overhead, leaving cost per successful refactoring unchanged. RefactorPlatform is open-sourced to make refactoring-agent evaluation reproducible and auditable.",
    "published": "2026-09-04T08:58:10Z",
    "updated": "2026-09-04T08:58:10Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.04898"
  },
  {
    "id": "2609.04894",
    "title": "From Language Models to World-Acting Systems: Progress and Limits of Agentic AI across Digital, Social, Virtual, and Physical Environments",
    "authors": [
      "Linsen Zhu",
      "Mengqing Cai"
    ],
    "abstract": "Large language models become consequential agents when surrounding systems let outputs change external state. Models now call tools, operate interfaces, delegate work, retain state, inhabit generated worlds, and control robots or laboratory equipment. Such advances are often narrated as one march toward autonomy, conflating model competence, system integration, persistence, and safe authority. This critical review synthesizes primary research and official technical specifications available by 31 August 2026. We organize the evidence along delegated authority, temporal persistence, and environmental coupling, while separating model, harness, and environment. Within the evidence examined, action-interface expansion is documented more convincingly than robust completion, recovery, authorization, or independent verification. Model Context Protocol and Agent2Agent improve interoperability but do not establish trustworthy delegation; multi-agent organization adds specialization alongside cost and correlated failure. Persistent simulations and world models support training and planning but do not themselves demonstrate agency; robotics and self-driving laboratories establish bounded feasibility rather than unattended open-world reliability. We propose justified delegation as an analytical and normative heuristic, not an observed law or certified score: expand action scope only where evidence supports provenance, bounded authority, failure detection, safe recovery, and calibrated human control. This framing yields a research agenda for coupled model-harness evaluation, capability-based permissions, durable state, cross-agent accountability, and staged physical validation.",
    "published": "2026-09-04T08:52:28Z",
    "updated": "2026-09-04T08:52:28Z",
    "categories": [
      "cs.AI",
      "cs.LG",
      "cs.MA"
    ],
    "url": "https://arxiv.org/abs/2609.04894"
  },
  {
    "id": "2609.04891",
    "title": "Attention-guided super-resolution of 4D flow MRI in carotid arteries",
    "authors": [
      "Ali Mokhtari",
      "Dominik Obrist"
    ],
    "abstract": "Four-dimensional (4D) flow magnetic resonance imaging (MRI) is a powerful non-invasive technique for visualizing and quantifying complex blood flow patterns in vivo. Despite its clinical promise, broader adoption is limited by low spatial resolution and sensitivity to noise, which restrict accurate assessment of critical hemodynamic biomarkers such as wall shear stress, pressure gradients, and turbulent kinetic energy. To overcome these challenges, we propose a deep learning-based super-resolution framework that integrates multi-scale feature extraction and attention mechanisms to enhance the quality of 4D flow MRI data. The model was trained on a dataset of 120 patients with 240 stenosed carotid arteries. High-resolution ground truth data were generated using patient-specific computational fluid dynamics (CFD) simulations based on segmented vascular geometries and physiologically realistic boundary conditions, and the resulting velocity fields served as targets for supervised learning. The proposed architecture uses convolutional block attention modules (CBAM) to guide the network toward clinically relevant spatial features and to suppress noise in low-resolution inputs. Quantitative results show that the attention-guided model substantially reduces the root mean square error (RMSE) compared with a baseline model without attention, and qualitative velocity contour analysis confirms improved reconstruction of intricate flow patterns. These findings highlight the capacity of the model to restore high-fidelity flow fields under noisy conditions and support the use of deep learning to extend the clinical utility of 4D flow MRI for non-invasive hemodynamic assessment.",
    "published": "2026-09-04T08:48:32Z",
    "updated": "2026-09-04T08:48:32Z",
    "categories": [
      "physics.med-ph",
      "cs.AI",
      "physics.flu-dyn"
    ],
    "url": "https://arxiv.org/abs/2609.04891"
  },
  {
    "id": "2609.04886",
    "title": "SimFuse3D: Source-Guided Target Simulation and Confidence-Guided Multi-Stage Localization Reweighting for Cross-Platform 3D Object Detection",
    "authors": [
      "Yongchun Lin",
      "Xinliang Zhang",
      "Yun Zou",
      "Zhixuan Xiao",
      "Liang Lei",
      "Jianya Guo",
      "Yuqiang Zhai",
      "Xiaofeng Wang",
      "HaiKuo Xu",
      "Haoang Li"
    ],
    "abstract": "Changes in sensor height and viewpoint alter object-level point distributions, making cross-platform LiDAR unsupervised domain adaptation (UDA) difficult. Self-training uses labeled source scans and unlabeled target scans, yet a retained prediction may provide a useful target location while enclosing sparse foreground returns, background clutter, or points inconsistent with the predicted box. We refer to this mismatch as box-point inconsistency. We introduce SimFuse3D, which preserves the target placement and repairs the associated pseudo-object using measured geometry from labeled source scans. Object Memory retrieves a compatible labeled source instance. Target Simulation places its ground-truth box at the target location, aligns its points with the target viewing geometry, and filters the aligned crop to approximate the target observation. Confidence-Guided Multi-Stage Localization Reweighting (CMLR) maps each target pseudo-object confidence score to a bounded weight shared by RPN localization and R-CNN box regression. All components operate only during adaptation, leaving the detector architecture and inference graph unchanged. Across six cross-platform transfers, SimFuse3D exceeds Pi3DET-Net on every reported AP metric and ranks first among the compared adaptation methods on nearly all metrics. On nuScenes-to-KITTI, it ranks first among the compared adaptation methods with both evaluated detectors.",
    "published": "2026-09-04T08:41:56Z",
    "updated": "2026-09-04T08:41:56Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.04886"
  },
  {
    "id": "2609.04880",
    "title": "Reinforcement Learning for Sequential Solar PV Policy Design under Uncertainty: An Agent-Based Approach",
    "authors": [
      "Iias Faiud",
      "Jonaid Shianifar",
      "Michael Schukat",
      "Karl Mason"
    ],
    "abstract": "Designing effective and fiscally sustainable policies for solar photovoltaic (PV) adoption requires balancing adoption gains against public expenditure under uncertainty and heterogeneous decision-making. This study formulates PV policy design as a sequential decision problem and integrates reinforcement learning (RL) with a stochastic agent-based model (ABM) that simulates yearly solar PV adoption under uncertainty. A policymaker agent selects annual incentives, including capital grants, subsidised loan rates, and feed-in tariffs, over a 16-year horizon. Adoption--cost trade-offs are explored by varying policy preferences within a scalarised reward framework. Policies are learned using PPO, SAC, and TD3 and evaluated under stochastic simulation. The results show that this approach produces a clear trade-off structure: the highest-adoption policy (TD3, $w_{\\text{cost}}=0.5$) achieves approximately 4,145 adopters at a cost of EUR 41.73 million, while the lowest-cost policy (PPO, $w_{\\text{cost}}=2.0$) reduces expenditure to EUR 7.27 million with 2,682 adopters. The balanced policy (PPO, $w_{\\text{cost}}=1.6$) achieves 3,495 adopters at a cost of EUR 22.47 million. Across algorithms, consistent trade-off patterns are observed, indicating robustness of the adoption--cost relationship. Compared with static baseline policies, the RL framework explores a broader range of policy configurations. These findings demonstrate the potential of RL as a flexible tool for adaptive policy design under uncertainty.",
    "published": "2026-09-04T08:38:34Z",
    "updated": "2026-09-04T08:38:34Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.04880"
  },
  {
    "id": "2609.04878",
    "title": "ReCAST: Restoration-aware Cascaded Stage-wise Training for Obfuscated SMS Risk Classification",
    "authors": [
      "Jieyun Huang",
      "Yi Shen",
      "Kaikai Zhao",
      "Jiangze Yan",
      "Wenjing Zhang",
      "Ping Chen",
      "Ning Wang",
      "Zhaoxiang Liu",
      "Kai Wang",
      "Shiguo Lian"
    ],
    "abstract": "Fraudulent messages sent via Short Message Service (SMS) are increasingly obfuscated to evade cost-conscious classifiers in production systems. In Chinese SMS, attackers can exploit a wide range of carefully crafted obfuscation strategies to hide risk-bearing phrases while preserving human readability, making direct classification brittle under real-world latency and throughput constraints. We propose ReCAST, a Restoration-aware Cascaded Stage-wise Training framework for robust obfuscated Chinese SMS classification. ReCAST distills a large teacher model's de-obfuscation ability into a smaller deployable student model by supervising obfuscated span detection, obfuscation type prediction, and text restoration, and then uses the restoration-aware student for downstream risk classification. Experiments on an internally constructed real-world Chinese SMS benchmark show that ReCAST substantially improves classification performance over directly trained baselines under obfuscation. The results suggest that restoration-aware distillation offers a practical path toward robust SMS risk classification with smaller deployable models under production-oriented constraints.",
    "published": "2026-09-04T08:36:21Z",
    "updated": "2026-09-04T08:36:21Z",
    "categories": [
      "cs.CR",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.04878"
  },
  {
    "id": "2609.04877",
    "title": "MARLA: A Conceptual Scaffold for Regulatory Learning under the EU AI Act",
    "authors": [
      "Alessio Buscemi",
      "Tom Deckenbrunnen",
      "Imane Hmiddou",
      "Marco Billi",
      "Livio Rubino",
      "Silvia Rizzuto Ferruzza",
      "Daniele Pagani",
      "Antonino Rotolo"
    ],
    "abstract": "The EU AI Act positions regulation as part of the infrastructure for safe, trustworthy and market-ready innovation. Realising this ambition requires regulatory learning: the evidence generated during implementation must be translated into governance and legal knowledge that supports consistent interpretation, effective oversight, and adaptation as technologies evolve. Yet the actors who produce this evidence and those who rely on it operate in different professional worlds. This paper proposes MARLA (Map, Assess, Report, Learn, Adapt), a conceptual scaffold organising regulatory learning as a five-stage cycle centred on the implementation of legal requirements into socio-technical practices, situated at the Local, National and European levels of the AI Act's governance architecture. Deliberately non-prescriptive, MARLA gives technical and legal stakeholders a shared vocabulary in which each of the first three stages generates its own documentable form of regulatory learning. We illustrate the scaffold with two piloted case studies and a prospective National-to-European illustration.",
    "published": "2026-09-04T08:35:01Z",
    "updated": "2026-09-04T08:35:01Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.04877"
  },
  {
    "id": "2609.04875",
    "title": "Forgetting Without Restarting: Execution-State Unlearning for Stateful LLM Agents",
    "authors": [
      "Chao Yao",
      "Yangbo Wei",
      "Zhen Huang",
      "Junhong Qian",
      "Chenle Chen",
      "Shaoqiang Lu",
      "Chen Wu",
      "Lei He"
    ],
    "abstract": "Long-running LLM agents are stateful: beyond the transcript they accrete compressed summaries, plaintext memory, pending tool plans, and, under every serving API, a KV cache. Yet today's \"forget\" operations delete a plaintext memory record and stop, leaving every artifact derived from the revoked information intact. We formalize execution-state unlearning: after a forget request, the agent must behave as if it had never observed the target. Modeling the runtime as a deterministic transition system, we prove that the pre-target trajectory prefix is shared with this counterfactual world for free, that the post-target suffix is irreducibly tainted without token-level attribution, and that exact unlearning requires at least $T-τ+1$ recomputed transitions, where $τ$ is the target's injection step. Provenance-Guided Selective Replay attains this bound as a cross-layer contract spanning prompt, compressed memory, and cache: a provenance graph locates the injection point, checkpoint restoration reduces to cropping the KV cache, and sanitized replay regenerates the counterfactual suffix. Audited with elicitation, stochastic, and string-free behavioral tests across three agent suites, nine baselines, and three model families, memory deletion leaves leakage unchanged, instruction-based forgetting collapses under elicitation (Leak@probes = 1.00), and source redaction still acts on a revoked preference in 80% of episodes, while selective replay is indistinguishable from a full reset at up to 9x fewer recomputed tokens.",
    "published": "2026-09-04T08:31:40Z",
    "updated": "2026-09-04T08:31:40Z",
    "categories": [
      "cs.CR",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.04875"
  },
  {
    "id": "2609.04871",
    "title": "AutoLR: Automating the Path from Research to Launch Review in Industrial Recommender Systems",
    "authors": [
      "Qi Zhang",
      "Yanlin Chen",
      "Wenchao Xiao"
    ],
    "abstract": "Improving an industrial recommender is an iterative research-and-engineering process rather than a direct path from idea to deployment. In \\textbf{DASHEN, NetEase's gaming-community app}, algorithm engineers typically identify promising directions from research papers, technical reports, and prior production experiments; reproduce or adapt the underlying methods; implement them in the production codebase; and evaluate the resulting models through training and offline experiments. Promising candidates are then advanced to online A/B tests, and those demonstrating robust gains are submitted to Launch Review---the internal gate for full-traffic rollout. Large language models (LLMs) can assist with individual stages of this workflow, but the overall process remains human-dependent without a harness that can reliably coordinate them across long-running, often multi-day experimental cycles. We present \\textbf{AutoLR}, initially built as \\textbf{Auto Launch Review} and later extended upstream into an autonomous research-to-launch harness. AutoLR combines three system mechanisms: a \\textbf{multi-expert council} that debates and adversarially reviews proposals; a \\textbf{deterministic evidence-weighted exploration--exploitation selector} that allocates a limited trial budget across candidate directions and uses Council reranking; and a layered knowledge system that combines external research, production-system knowledge, and DASHEN-specific domain knowledge---such as game communities, player characteristics, and content-interaction patterns---with posterior evidence from configurations, patches, logs, failures, and offline outcomes. LLM agents perform semantic reasoning and code generation, while deterministic controllers retain authority over execution, metric extraction, guardrails, and persistent state transitions.",
    "published": "2026-09-04T08:30:36Z",
    "updated": "2026-09-04T08:30:36Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.04871"
  },
  {
    "id": "2609.04870",
    "title": "CHAMP: Cross-domain Hybrid Architecture for Matchmaking and Prediction in Online Multi-Player Games",
    "authors": [
      "Kai Wang",
      "Ge Fan",
      "Chaoyun Zhang",
      "Yuyang Jiang",
      "Yuze Liu"
    ],
    "abstract": "Multiplayer Online Battle Arena (MOBA) games rely on matchmaking to maintain competitive balance. Our prior work, CUPID, framed matchmaking as an assignment re-optimization problem and showed that a single-mode win-rate predictor can meaningfully rebalance teams. However, deploying such a system across diverse player populations exposes three practical bottlenecks: most queueing players lack sufficient in-mode match history (cold start), skill distributions shift drastically across rank tiers (distribution inconsistency), and extreme skill segments are severely data-starved. We present CHAMP, a cross-domain matchmaking framework that resolves these deployment bottlenecks. To address data sparsity and cold starts, CHAMP replaces the target-mode-only player profile with a hybrid domain feature collection: a timestamp-ordered cross-mode short-term sequence whose slices are annotated with target-domain features, plus per-mode breakdowns of long-term, real-time and team statistics. We further propose the Domain-Aware Win-rate Network (DAWN): a Domain-aware Knowledge Extractor (DAKE) compiles target-mode attributes into learnable representations that feed Domain-Aware Temporal/Spatial/Permutation OmniNet Encoders (DATOE/DASOE/DAPOE), so that mode-conditioned representations and per-mode debiasing are learned jointly inside a single shared network. Online, one trained DAWN serves every supported mode, with per-mode position-satisfaction thresholds as the only mode-specific knob. Offline, DAWN achieves 67.73% win-rate prediction accuracy, outperforming all evaluated attention and sequence baselines. Online A/B tests across the entire League ladder of a large-scale MOBA game, from novice players up to the top-expert players served by Elite Mode, demonstrate consistent drops in imbalanced matches. For lower-tier players, CHAMP reduces the 5-minute kill crushing rate by up to 20.73%.",
    "published": "2026-09-04T08:30:29Z",
    "updated": "2026-09-04T08:30:29Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.04870"
  },
  {
    "id": "2609.05552",
    "title": "An Agent Model Abstraction for Human-AI Teaming Cognitive Coupling",
    "authors": [
      "Kolitha Kottagaha W. M",
      "Jos A. C. Bokhorst",
      "Ben Gaffinet",
      "Christos Emmanouilidis"
    ],
    "abstract": "Industrial environments increasingly rely on collaboration between humans and AI-enabled agents. Effective teamwork requires aligning how agents perceive situations, plan actions to pursue goals, and adapt to changing conditions, yet existing systems lack mechanisms for cross-agent cognitive processes coupling. This paper presents a conceptual cognitive agent model that formalises cognitive coupling through eight components: Input, Process, Output, State, Value, Memory, World Model, and Goal. The model abstracts how agents coordinate and co-regulate their cognitive cycles, providing a basis for analysing distributed cognition and designing cognitively interoperable human-AI systems.",
    "published": "2026-09-03T11:01:02Z",
    "updated": "2026-09-03T11:01:02Z",
    "categories": [
      "cs.HC",
      "cs.AI",
      "cs.MA"
    ],
    "url": "https://arxiv.org/abs/2609.05552"
  },
  {
    "id": "2609.03665",
    "title": "PlanePivoting: Exploration and Optimization of Gaze-Mouse Cursor Alignment for Spatial Object Translation",
    "authors": [
      "Jinwook Kim",
      "Sangmin Park",
      "Jihyeon Lee",
      "Sang Ho Yoon",
      "Jeongmi Lee"
    ],
    "abstract": "As XR matures into a ubiquitous computing platform, the disconnect between 2D and 3D input modalities remains a critical barrier to seamless workflow. Frequent transitions between the mouse for 2D precision and hand gestures for 3D manipulation induce significant physical fatigue and cognitive load. To address this, we introduce PlanePivoting, a multimodal interaction technique that extends standard mouse input into 3D space by leveraging gaze-mouse alignment. This technique dynamically modulates the translation plane based on the spatial overlap between the gaze and mouse cursor, eliminating the need for physical input modality switching. To systematically explore the foundational design space of gaze-mouse coordination and optimize key variables, we conducted a user study comparing PlanePivoting with a standard 3D Gizmo interface across two translation mapping profiles and two gaze cursor apertures. Results demonstrate that PlanePivoting outperforms the Gizmo on efficiency metrics while maintaining comparable precision and yielding higher subjective satisfaction. This study demonstrates the potential of gaze-mouse alignment for efficient spatial manipulation between 2D and 3D environments.",
    "published": "2026-09-03T10:59:56Z",
    "updated": "2026-09-03T10:59:56Z",
    "categories": [
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2609.03665"
  },
  {
    "id": "2609.03663",
    "title": "Cross-Dataset Transfer and Reliability of Explainable Artificial Intelligence for RhythmFormer Remote Photoplethysmography",
    "authors": [
      "Louis Chen",
      "Torbjörn E. M. Nordling"
    ],
    "abstract": "Background. Remote photoplethysmography estimates the cardiovascular pulse from facial video, and its explanations have rested on inspecting heatmaps rather than on quantitative evidence about where a model reads it. We quantified the explanations and asked whether such explanations transfer between datasets and track model performance. Method. We trained eight condition-specific RhythmFormer models on NCKU-rPPG, recorded under three illumination levels, speaking, rotation, and cycling, estimated one heart rate per 5.12-second clip, and set them beside a UBFC-rPPG reproduction. Raw attention, rollout, attention flow, and Beyond Intuition were assessed by skin coverage and the Salience-guided Faithfulness Coefficient (SaCo). Results. Beyond Intuition ranked highest on both datasets, at median coverage 0.789 and SaCo 0.837 on Static level 3 against 0.826 and 0.917 on UBFC-rPPG; lower ranks differed. Within one participant of one condition, neither measure was related to a clip's heart-rate error, waveform correlation, or signal-to-noise ratio on either dataset: 186 of the 252 coefficients fell below $|ρ|=0.10$ and 28 reached $p<0.05$ against the 13 expected by chance. Across the eight scenarios only Beyond Intuition's coverage followed the three performance measures, at $ρ=-0.43$, $+0.57$, and $+0.43$, while the attention-only methods' SaCo ran opposite to each. It failed at 40 lux alone, its median coverage falling to 0.180 and its median SaCo to $-0.178$, whereas motion degraded the estimates far more without such a drop. Conclusions. Skin coverage and SaCo carry information complementary to the performance measures rather than a proxy for them: attributing to the skin does not guarantee an accurate estimate. What an attribution reveals about a condition is where the model looks rather than how faithfully its map is ordered.",
    "published": "2026-09-03T10:59:45Z",
    "updated": "2026-09-03T10:59:45Z",
    "categories": [
      "cs.CV",
      "cs.AI",
      "eess.IV"
    ],
    "url": "https://arxiv.org/abs/2609.03663"
  },
  {
    "id": "2609.03661",
    "title": "Point&Spawn: Mid-Air Reference-Free Object Instantiation Using Gaze and Hand Gestures in Extended Reality",
    "authors": [
      "Jihyeon Lee",
      "Ken Pfeuffer",
      "Jinwook Kim",
      "Jeongmi Lee"
    ],
    "abstract": "Mid-air object instantiation in XR requires users to specify a 3D position without spatial references, such as surfaces or existing objects. We present Point&Spawn, a staged pipeline for pre-instantiation position specification through Direction Setting, Depth Setting, and Position Refinement within a continuous gesture flow. We evaluated six controller-free techniques combining Gaze or Non-Dominant Hand (NDH) direction setting with Ray Intersection, Relative Gain, or Drag&Hold depth setting in a user study (N=24) across Near and Far spawn depths. Relative Gain and Drag&Hold yielded faster and more accurate spawning, lower workload, higher usability, and greater preference than Ray Intersection. The shoulder-referenced NDH ray improved speed and coarse accuracy, whereas the viewpoint-based Gaze ray reduced hand movement with comparable final accuracy. Farther spawn depth imposed greater temporal costs as well as Gaze and accuracy costs with Ray Intersection. These findings offer empirical guidance for designing direction and depth control in spawning in XR.",
    "published": "2026-09-03T10:58:11Z",
    "updated": "2026-09-03T10:58:11Z",
    "categories": [
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2609.03661"
  },
  {
    "id": "2609.03660",
    "title": "Local Updates, Global Learning (LUGL): Playing Games with non-incremental Learners",
    "authors": [
      "David Milec",
      "Spyridon Samothrakis",
      "Michael Fairbank",
      "Dennis J. N. J. Soemers"
    ],
    "abstract": "The dominance of Neural Networks (NNs) in RL is partially due to their incremental learning capability, which naturally suits the online, non-stationary nature of self-play training. However, gradient-boosted trees like LightGBM are widely recognised as the state of the art for tabular data in supervised learning, often outperforming NNs in accuracy and efficiency. Game states are inherently tabular---discrete actions, categorical card identities, structured board positions---which makes them an ideal candidate for tree-based methods. We introduce LUGL (Local Updates, Global Learning), a framework that decouples data collection from model fitting, enabling non-incremental learners such as GBTs to operate in RL settings where they would otherwise fail due to distributional shift. LUGL alternates between a local updates phase, where the agent plays self-play games and accumulates tabular updates (Q-values, V-values, policies, or regret values) in a finite table, and a global learning phase, where the table is used to train a function approximator that generalises to unseen states before the table is reset. We test our approach in four standard perfect-information games (Tic-tac-toe, Connect-4, Othello, and Hex) and five imperfect-information games (Kuhn's poker, Leduc Hold'em, Liar's Dice, Goofspiel, and Flop5 Hold'em), and show that our results are competitive with or superior to DQN and DeepCFR. Our experiments demonstrate that the community's strong bias towards NNs in game-playing may be unwarranted, since LightGBM-based agents achieve competitive or superior performance across all tested benchmarks.",
    "published": "2026-09-03T10:58:09Z",
    "updated": "2026-09-03T10:58:09Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.03660"
  },
  {
    "id": "2609.03657",
    "title": "Rethinking 3D Noise: Learning 3D-Aware Video Priors via Optimization-Free Morphological Perturbations",
    "authors": [
      "Onat Şahin",
      "Mohammad Altillawi",
      "George Eskandar",
      "Carlos Carbone",
      "Ziyuan Liu"
    ],
    "abstract": "3D scene representations like NeRF and 3D Gaussian Splatting (3DGS) suffer severe artifacts in sparse-view settings. Recent generative 3D artifact fixers attempt to address this, but rely on paired corrupted and clean renders requiring costly, per-scene reconstructions across varying view configurations. While 2D image augmentations act as instant regularizers, no explicit equivalents exist for 3D representations to preserve spatial consistency across views, an essential property for 3D-aware training. We propose 3D Morphological Perturbations as an optimization-free regularizer that preserves spatial consistency. Leveraging explicit 3DGS, we treat each Gaussian as a fundamental building block - analogous to a 2D pixel - and apply perturbations across its morphological parameter space via scale, rotation, and pruning. Our method eliminates per-scene 3DGS optimization loops from dataset curation while enabling models to learn stronger geometric priors than sparse-view baselines in diagnostic ablations conducted on a lightweight video diffusion sandbox. Scaled to a 14B-parameter video model via ControlNet, our approach maintains visual fidelity while reducing mean depth error by 12.5% over state-of-the-art image-to-image 3D artifact refiners, ultimately boosting downstream robotics policy success rates by up to 8.0% across 3 of 4 manipulation tasks.",
    "published": "2026-09-03T10:54:49Z",
    "updated": "2026-09-03T10:54:49Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.03657"
  },
  {
    "id": "2609.03655",
    "title": "PL-SCEA: Reconfiguring Pretrained Attention for Few-Shot Industrial Anomaly Detection",
    "authors": [
      "Xiaoyu Yang",
      "Qixing Wu",
      "Huixian Zhao",
      "Changlong Jin"
    ],
    "abstract": "Vision Foundation Models (VFMs) provide transferable patch representations for few-shot industrial anomaly detection, but their attention computation is typically inherited from pretraining objectives centered on semantic aggregation. This creates a potential mismatch: token relations that support semantic recognition may not adequately expose the localized texture and structural deviations required for anomaly localization. We therefore investigate the hypothesis that the attention computation of a frozen VFM can be reconfigured as a task-relevant component of anomaly detection. We instantiate this idea with Power-Law Self-Correlation Enhanced Attention (PL-SCEA), which retains the semantic context of pretrained query-key attention while constructing token-adaptive self-correlations over contextualized value features. Positive-correlation filtering and power-law reweighting then emphasize relations that are salient relative to each token's relational background, without introducing additional trainable attention projections. The resulting features are modeled by a lightweight variational autoencoder that provides a fixed-size reconstruction-based representation of category-specific normality. The two stages serve complementary roles: attention reconfiguration shapes how local relational deviations are represented, while reconstruction-based modeling converts deviations from learned normality into anomaly scores. Across MVTec AD and VisA, the complete framework achieves competitive image-level detection and consistently strong pixel-level localization across the evaluated few-shot settings. Ablations further show that PL-SCEA improves localization with either the VAE or a memory bank under the tested setting. These results support the view that task-aligned attention reconfiguration can improve the anomaly-localization capability of frozen pretrained representations.",
    "published": "2026-09-03T10:54:05Z",
    "updated": "2026-09-03T10:54:05Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.03655"
  },
  {
    "id": "2609.03654",
    "title": "Enhancing Financial Question Answering: A Novel Benchmark Dataset of Banks' financial statements",
    "authors": [
      "Arianna Miola",
      "Bruno Spaccavento",
      "Lorenzo Silotto",
      "Marco Bianchetti",
      "Luca Cagliero"
    ],
    "abstract": "The comparative analysis of banks' financial statements poses significant challenges for automated question answering systems due to their complexity, substantial length, technical language, and inhomogeneity of both textual and numerical content across different jurisdictions and institutions. We introduce FinRAG-QA, a novel benchmark dataset for financial question answering, which comprises 999 practitioner-curated questions on 10 standardised indicators, grounded in 209 annual and Pillar 3 reports from 24 major European and U.S. banks spanning 2019-2023. Unlike prior financial QA benchmarks, which centre on U.S. filings and single-institution analysis, FinRAG-QA targets cross-institutional retrieval over documents averaging 198k words, longer than any existing financial QA resource. On this benchmark we evaluate a multi-stage RAG pipeline and isolate the contribution of each component. Contextual chunk enrichment combined with a retrieval-optimised embedding model raises NDCG@10 from 0.322 to 0.710; conditional on the ground truth being retrieved, a reasoning-optimised generator raises answer accuracy from 44.6% to 79.0% (+34.4 percentage points), at roughly 20x the generation latency. We further show that cross-encoder reranking degrades retrieval when the first-stage ranking is already strong, and that a single top-ranked chunk outperforms larger contexts at generation time. Experiments were run in late 2024-early 2025 with the models available at that time.",
    "published": "2026-09-03T10:52:56Z",
    "updated": "2026-09-03T10:52:56Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.CE",
      "cs.IR",
      "q-fin.GN"
    ],
    "url": "https://arxiv.org/abs/2609.03654"
  },
  {
    "id": "2609.03641",
    "title": "Tree-Structured Vector Quantization For Efficient And Progressive Image Compression",
    "authors": [
      "Xinkun Wang",
      "Tianyi Xu",
      "Qingyu Luo",
      "Mingming Ma",
      "Changzhe Jiao",
      "Fu Li",
      "Yi Niu"
    ],
    "abstract": "Vector-quantization based image compression has achieved strong rate--distortion performance, yet most of them still produce a separate compressed representation for each target bitrate. Such variable-rate behavior allows one model to operate at multiple rates, but it does not necessarily provide a progressive bitstream whose prefixes are themselves decodable and can be refined by appending additional bits. We propose \\textbf{Tree-VQ}, a progressive tree-structured vector quantization framework for learned image compression. Tree-VQ organizes discrete codewords as a hierarchical binary tree and represents each latent token by a routed root-to-leaf path. Crucially, every prefix of this path corresponds to a valid quantized representation, so shallow internal nodes serve as coarse reconstruction codes and deeper nodes provide successive refinements. This allows a compressed image to be decoded from an early prefix and progressively improved as more branch symbols are received, rather than being re-encoded for different target rates. To make this structure practical for compression, we introduce a prefix-compatible tree entropy model that codes progressive continuation decisions and routed branch refinements using only causally available decoded contexts. We further use rate-aware refinement scheduling to decide which spatial blocks should receive additional tree bits under a given prefix budget, and hierarchical prefix supervision to ensure that internal nodes are directly decodable at low rates. Experiments show that Tree-VQ achieves a superior performance--efficiency trade-off, delivering the best perceptual compression results with much fewer parameters and lower latency than competing methods.",
    "published": "2026-09-03T10:41:36Z",
    "updated": "2026-09-03T10:41:36Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.03641"
  },
  {
    "id": "2609.03639",
    "title": "Stabilizing Camera-Controlled Novel View Synthesis at Inference Time",
    "authors": [
      "Prajwal Singh",
      "Arjun Badola",
      "Seema Kumari",
      "Hajime Nagahara",
      "Shanmuganathan Raman"
    ],
    "abstract": "Training-free, camera-controlled novel view synthesis from a single image using pre-trained video diffusion models often becomes unstable under large camera motion and long generation horizons. Existing approaches commonly combine several inference-time components, making it unclear which design choices are most important for stability. We show that the main source of stability is simple. Decomposing camera motion into small autoregressive steps limits per-step geometric distortion and reduces error accumulation. A controlled camera-step study shows that performance remains stable for small motions and degrades more strongly as the per-step motion approaches $18$-$20^\\circ$. We further evaluate geometry-constrained spatial attention and low-frequency appearance anchoring as supporting refinements, together with an efficient registration-free warping pipeline. Across RealEstate10K and MegaScene, CamTrol++ improves temporal and geometric consistency, downstream 3D reconstruction quality, and generation efficiency over training-free baselines. The method remains effective for 56-frame generation and under substantial controlled depth corruption. These results show that careful control of camera motion at inference time can substantially improve the stability of camera-controlled novel view synthesis without retraining or modifying the diffusion backbone.",
    "published": "2026-09-03T10:39:44Z",
    "updated": "2026-09-03T10:39:44Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.03639"
  },
  {
    "id": "2609.03635",
    "title": "Analysis of Prompt Engineering for Drug Toxicity Prediction",
    "authors": [
      "Mia MacGregor",
      "Aakash Welgamage Don",
      "Mark Bartlett"
    ],
    "abstract": "Clinical trials in the UK can cost up to £1.3 million, with approximately 90% drug failure rate. Toxicity is a major contributing factor in drug failure. Testing is time and cost intensive. In recent years, the use of artificial intelligence has been increasingly explored to aid in the prediction of drug toxicity, with extensive use of large language models (LLMs). However, LLMs can show considerable variation when minor changes are made to prompts, which raises concerns about their sensitivity to prompt engineering. Prompt engineering is used to optimise a prompt given to an LLM to generate the desired output. This paper proposes a method to analyse prompt engineering for drug toxicity prediction. The aim of the paper is to investigate the importance of prompt phrasing for drug toxicity prediction. LLMs were prompted to identify chemical properties of significance when predicting drug toxicity. Prompts were constructed to investigate; job role, prompt structuring, and rule interpretation. LLMs were then used to generate datasets, using the identified features from initial prompting, which were then passed to machine learning algorithms. The experiments show that the natural variance which occurs in LLMs outweighs any fine-tuning of prompts. There were, however, substantial improvements in model performance when using chemoinformatic code to extract features instead of using LLM-generated values. The proposed analysis methodology is applicable to a wide range of prompt types across different areas of bioinformatics.",
    "published": "2026-09-03T10:28:55Z",
    "updated": "2026-09-03T10:28:55Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.03635"
  },
  {
    "id": "2609.03633",
    "title": "</think> Doesn't Stop Reasoning: Analysis of Spurious CoT Termination",
    "authors": [
      "Seunghee Koh",
      "Sungjae Choi",
      "Minchan Kwon",
      "Sunghyun Baek",
      "Junmo Kim"
    ],
    "abstract": "Chain-of-thought (CoT) reasoning improves large reasoning models (LRMs) on complex tasks but often produces long, redundant traces. Recent training-free early-exit methods shorten these traces by choosing an intermediate point to stop reasoning. We study one such strategy that injects an end-of-think token (EoT, </think>) at this point to trigger the reasoning-to-answering transition, and find that the injected EoT does not always induce a clean answering phase. Answering-phase generation can continue before the model regenerates another EoT, with the span preceding this regenerated EoT scaling with the reasoning tokens saved by early exit and exhibiting continued reasoning behavior. We call this spurious CoT termination, where reasoning-like generation continues into the answering phase. We hypothesize that insufficient attention to the injected EoT contributes to spurious CoT termination and probe this hypothesis with Exit-token Attention Biasing (EAB). Across four LRMs, five benchmarks, and two early-exit methods, increasing attention to the injected EoT reduces spurious CoT termination and answering-phase length. These results reveal a limitation of controlling LRMs by externally matching their explicit think-block format. Inserting the EoT token conforms to this format but does not by itself guarantee the intended reasoning-to-answering transition. Our code is available at https://github.com/Seunghee-Koh/Spurious-CoT-Termination.",
    "published": "2026-09-03T10:25:23Z",
    "updated": "2026-09-03T10:25:23Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.03633"
  },
  {
    "id": "2609.02754",
    "title": "Untangling the Mechanisms of Misleading Context in Medical Question Answering",
    "authors": [
      "Robin Linzmayer",
      "Noémie Elhadad"
    ],
    "abstract": "Large language models now answer medical questions with expert-level performance. However, the context these systems act on can be misleading, and misleading context can corrupt a model's medical judgment. To understand how misleading context corrupts this judgment, we examine the model's susceptibility to the context, disclosure of it, mechanism of corrupted reasoning, and monitorability of the decision. On the medical reasoning subset of MedMisBench, a clinician-reviewed question-answering benchmark of 8,627 questions, we inject two types of misleading context cues, fabricated evidence and a bare assertion. We test three reasoning models, two that expose their full reasoning trace and one frontier model that exposes only its response. All three are more susceptible to the assertion than to the fabricated evidence, adopting the asserted answer 10 to 27 points more often. The misleading cues are disclosed in 81 to 98% of traces but only 7 to 90% of responses, and the assertion is disclosed less often than evidence based cues. Resampling from reasoning traces without disclosure shows the two cues corrupt reasoning differently, evidence entering early and accumulating while the assertion redirects the conclusion near its end. An LLM monitor catches 78% of corrupted decisions at 5% false positives when reading an open model's trace with guidance, against at most 32% from any response. The misleading context that models are most susceptible to is disclosed least, and was caught reliably only from an open reasoning trace, which frontier providers withhold.",
    "published": "2026-09-02T15:55:56Z",
    "updated": "2026-09-02T15:55:56Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2609.02754"
  },
  {
    "id": "2609.02751",
    "title": "Multi-Tool Image Editing Attribution in Facial Forgery",
    "authors": [
      "Sheng Liu",
      "Qiang Sheng",
      "Danding Wang",
      "Yu Li",
      "Chenming Zhou",
      "Juan Cao"
    ],
    "abstract": "As generative AI tools become increasingly powerful and easy to use, people can easily edit portrait images with a prompt, necessitating the task of image editing attribution, which predicts the involved editing tools from the given image. Existing attribution methods hold the single-tool assumption and can only attribute a specific editing tool, but struggle to handle the more complex and increasingly common multi-tool editing scenarios, where artifacts left by different editing tools are composite and overlapped. To address this gap, we explore Multi-Tool Image Editing Attribution (MIEA), which aims to identify multiple editing tools involved in a multi-tool edited facial image. To simulate the real-life editing operations on facial images, we then construct a new dataset, MultiEdit, which contains 500k+ edited facial images and covers six types of editing tools that support face swapping (Deepfake) and various facial enhancements. Inspired by the findings from data analysis, we design DPEC, a multi-tool attribution method that can capture distinguishable, locality-aware editing tool traces from both spatial and frequency domains with the support of an error-based curriculum learning strategy. Experiments show \\Method\\ outperforms nine methods for facial images edited in at most five steps.",
    "published": "2026-09-02T15:51:26Z",
    "updated": "2026-09-02T15:51:26Z",
    "categories": [
      "cs.CV",
      "cs.MM"
    ],
    "url": "https://arxiv.org/abs/2609.02751"
  },
  {
    "id": "2609.02750",
    "title": "Bilevel Coordinated Reflection: A Game-Theoretic Approach to Multi-Agent LLM Systems",
    "authors": [
      "Yihang Chen",
      "Yuxiang Chen",
      "Yuxuan Huang",
      "Meng Fang",
      "Weilin Luo",
      "Jun Wang"
    ],
    "abstract": "Multi-agent LLM systems commonly use an orchestrator to decompose a task for a team of workers and then improve through textual reflection. Despite strong empirical results, these systems lack a unified account of coordination, memory improvement, and the role of external verification. We model orchestrator-worker interaction as a bilevel coordination game: under bounded coupling, the workers' local-update game is an approximate potential game whose equilibrium slack is controlled by decomposition quality. We then analyse reflection as stochastic movement over semantic memory states. For free-form reflection, we derive a finite-time upper bound, prove worst-case tightness, and give a positive lower bound under a falsifiable persistent-harm condition. We further prove an information-theoretic impossibility result: no gate that observes only the generated transcript can improve uniformly over text-indistinguishable environments, whereas an environment-grounded gate can. Motivated by this separation, we introduce Stochastic Reflective Memory Ascent (SRMA), which accepts a candidate memory only after a grounded evaluation risk strictly decreases. Under calibration and non-degenerate corrective mass, SRMA converges exactly, geometrically or polynomially; matching constructions show that both rate regimes are order-tight. We also provide confidence gating for stochastic evaluation and re-anchoring guarantees for piecewise-stationary environments. Experiments instantiate these objects with environment-grounded metrics and test the predicted coordination and drift laws. On 500 SWE-bench instances, the complete Kimi-based system resolves 72.2% versus a 70.8% public mini-SWE-agent reference. Code: https://github.com/YihangChen9/Bilevel-Coordinated-Reflection",
    "published": "2026-09-02T15:50:10Z",
    "updated": "2026-09-02T15:50:10Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.02750"
  },
  {
    "id": "2609.02749",
    "title": "Repo-To-Skill: Distilling GitHub Repositories Into AI4AI Skills",
    "authors": [
      "Jianlyu Chen",
      "Yuyang Hu",
      "Hongjin Qian",
      "Jiawei Liu",
      "Wenqing Wei",
      "Xiaolong Chen",
      "Defu Lian",
      "Zhicheng Dou",
      "Chaozhuo Li",
      "Qiwei Ye",
      "Zheng Liu"
    ],
    "abstract": "Autonomous agents are beginning to carry out machine-learning (ML) research end to end. These agents combine a model backbone with a harness for planning, execution, memory, and verification, but this architecture still leaves domain-specific know-how outside the agent. We call this missing layer operational knowledge, the know-how that separates knowing a method from making it work. That knowledge is not absent from the field. It appears in repositories and papers, but in forms written for human readers and too large to load during a task. Once distilled into compact, verified skills, this knowledge can be reused across tasks rather than rediscovered during each run. We present DisCo, a skill-powered research agent that creates skills and uses them during research. Its distillation runs in two complementary forms: task-agnostic, condensing the field's widely used repositories into reusable skills, and task-oriented, producing the skills a concrete task calls for. The former, applied across the open ecosystem, yields the AREX-Skill Library, with 5,000+ verified skills distilled from 1,000 widely used ML repositories and organized into 20 areas and 178 capability families. With the GPT-5.5 backbone, research harness, and downstream execution budget held fixed, the skill-equipped research agent scores 134.3% higher on MLE-bench, 34.4% higher on PaperBench, 9.2% higher on FrontierCS, and 14.0% higher on PassNet than the same agent without skills. These gains come from adding distilled operating context under that fixed setup.",
    "published": "2026-09-02T15:49:41Z",
    "updated": "2026-09-02T15:49:41Z",
    "categories": [
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2609.02749"
  },
  {
    "id": "2609.02748",
    "title": "Balancing Frequencies and Pixels in Flow Matching",
    "authors": [
      "Lucas Degeorge",
      "Paul Couairon",
      "Arijit Ghosh",
      "Alexei A. Efros",
      "David Picard",
      "Vicky Kalogeiton"
    ],
    "abstract": "Natural images follow a $1/f^2$ spectral distribution: most signal energy lies in the low spatial frequencies, while the perceptually important structures such as textures and edges occupy sparse high-frequency bands. Pixel-space reconstruction objectives, however, treat all spatial errors uniformly, causing low frequencies to dominate the optimization signal and delaying the learning of fine-scale details. In this work, we identify this objective-level spectral imbalance as a key inefficiency in training pixel-space flow models. To address it, we propose a Focal Log-Frequency Loss (f-loss), a spectrally balanced objective that equalizes the learning signal across frequencies, emphasizing high-frequency components that are otherwise underrepresented in pixel-space objectives. Building on this, we introduce a simple training strategy that combines frequency and pixel supervision: we first emphasize frequency-domain learning early to capture all frequencies, and then transition to standard pixel-space v-loss for spatial refinement. This balancing mitigates the low-frequency bias of pixel losses and aligns the training signal with the evolving needs of the model. Our approach is conceptually simple, requires no architectural changes, and acts as a drop-in replacement for flow matching losses. Across multiple model scales, it accelerates convergence by up to 40% while consistently improving FID and perceptual fidelity. We will release code and models.",
    "published": "2026-09-02T15:49:24Z",
    "updated": "2026-09-02T15:49:24Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.02748"
  },
  {
    "id": "2609.02747",
    "title": "InceptionGS: Generative Bootstrapping for Large-Scale Gaussian Splatting under Unstructured View Sampling",
    "authors": [
      "Tianheng Lu",
      "Guangyu Wang",
      "Ruqi Huang",
      "Lu Fang"
    ],
    "abstract": "Achieving truly immersive large-scale scene digitization necessitates consistent and visually pleasing rendering across all possible viewing perspectives. However, collecting multi-view images covering every fine detail of a large-scale scene is prohibitive due to scene complexity, capture cost, negligence, or accessibility constraints. As a result, the sampled views tend to be highly unstructured -- the majority of the scene is well covered yet certain regions inevitably lack sufficient observations. Existing reconstruction based methods are vulnerable to view scarcity while generation based approaches suffer from generalization, controllability, and 3D consistency issues. To address this challenge, we propose InceptionGS, which bootstraps Gaussian splatting by subtly balancing reconstruction and generation. Starting from an initial Gaussian splatting, InceptionGS reasonably rethinks and repairs problematic regions caused by view scarcity while preserving the quality elsewhere, by softly incorporating scene- and view-adaptive generative priors. Extensive experiments on real-world large-scale scenes demonstrate the superiority and broad applicability of our approach in handling unstructured imagery and boosting high-fidelity Gaussian splatting. Please refer to the supplementary video for better visual demonstrations.",
    "published": "2026-09-02T15:48:15Z",
    "updated": "2026-09-02T15:48:15Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.02747"
  },
  {
    "id": "2609.02746",
    "title": "HiPoly: a hierarchical polymer-native AI framework for property prediction and generative design",
    "authors": [
      "Ge Sun",
      "Gervasio Zaldivar",
      "Yuan Tian",
      "Gustavo Perez Lemus",
      "Juhae Park",
      "Dasha Safarian",
      "Ming Han",
      "Juan J. de Pablo"
    ],
    "abstract": "Polymeric materials are central to modern technologies, with applications ranging from energy to health and transportation. Although AI has made significant advances in materials discovery, the hierarchical structure of polymers across multiple length scales makes them inherently difficult to represent in a unified and physically meaningful way. Here we introduce HiPoly, a polymer-native AI framework that processes complete polymer descriptions through a three-level hierarchical graph architecture built on the G2RINS representation. HiPoly encodes stochastic inter-monomer connectivity, composition, and molecular weight directly within its architecture, using physically motivated design principles that mirror the multi-scale nature of polymeric systems. The framework establishes an end-to-end AI-driven workflow from experimental formulation data to property prediction, generative molecular design, and physics-based validation through molecular simulations, all unified by a single polymer representation. We demonstrate state-of-the-art prediction accuracy for thermophysical properties of multi-component polymer systems, with ablation studies confirming that each hierarchical design choice contributes independently to model performance. As an example, the generative design pathway is applied here to the discovery of sustainable alternatives to persistent fluorinated polymers, where it is possible to identify and independently validate PFAS-free candidates with target surface-energy properties. This work demonstrates how polymer-native AI can accelerate discovery by linking representation, prediction, and design across complex polymer chemistries.",
    "published": "2026-09-02T15:48:11Z",
    "updated": "2026-09-02T15:48:11Z",
    "categories": [
      "physics.chem-ph",
      "cond-mat.mtrl-sci",
      "cs.AI",
      "cs.LG",
      "physics.comp-ph"
    ],
    "url": "https://arxiv.org/abs/2609.02746"
  },
  {
    "id": "2609.02737",
    "title": "Language Models Can Control Their Own Attention",
    "authors": [
      "Namgyu Ho",
      "Huzama Ahmad",
      "Woosung Koh",
      "Se-Young Yun",
      "Tal Schuster",
      "Cicero Nogueira dos Santos"
    ],
    "abstract": "Language models spend most of their attention on a small fraction of context, yet they read the entire KV cache to find the few tokens that matter. If the user asks about a previous detail in a 1M-token conversation, global attention layers must scan the full context to generate each token of the reply. A prominent approach mitigates this cost by pre-selecting relevant tokens via lightweight proxy scores, but this extrinsic scoring still incurs O(N) per step. We take an intrinsic approach motivated by the simple question: wouldn't the model already know which parts of the context are relevant? To this end, we introduce Declarative Attention (DA), a protocol that elicits the model to declare where it needs to attend within its chain-of-thought, partitioning generation into three modes: <global> (full context), <focus> (a specific region), and <local> (recent output only). The inference engine parses these declarations like tool calls and skips most of the KV cache read. Under zero-shot evaluation across 15 long-context tasks, DA on off-the-shelf models (Gemma-4-31B, Qwen-3.6-27B) significantly reduces total attended tokens during decoding (52.0%, 31.1%) with modest accuracy drops (1.27pp, 2.75pp) that shrink with model scale. DA unlocks a new axis of sparse attention, with further potential under training-based methods that future work can explore.",
    "published": "2026-09-02T15:43:38Z",
    "updated": "2026-09-02T15:43:38Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2609.02737"
  },
  {
    "id": "2609.02731",
    "title": "RVSD: Retrieval Vision Sparse Decoding for Mitigating Visual Hallucinations in Large Vision-Language Models",
    "authors": [
      "Canjie Liu",
      "Jiawen Kang",
      "Jinbo Wen",
      "Zishao Zhong"
    ],
    "abstract": "Large vision-language models have achieved remarkable success in vision-language tasks. However, they remain prone to Visual Hallucinations (VHs), undermining their reliability in real-world applications. Existing solutions typically require curated datasets, additional training, or multi-round decoding, resulting in considerable computational overhead. In this paper, we propose \\textbf{RVSD} (\\underline{R}etrieval \\underline{V}ision \\underline{S}parse \\underline{D}ecoding), a training-free and plug-and-play decoding framework that, for the first time, unifies token sparsification and \\textbf{Semantic-Space Visual Retrieval} (SSVR) within a single decoding pass. Within RVSD, we introduce a \\textbf{semantics-directed token selection} strategy that selectively sparsifies redundant tokens while preserving critical visual information. We further propose the SSVR mechanism, which reformulates visual compensation as an on-demand cross-modal retrieval process within a shared semantic space. Extensive experiments demonstrate that RVSD achieves state-of-the-art performance in mitigating VHs while maintaining robust suppression capabilities under long-context generation settings. Our code is available here.\\footnote{https://github.com/canjie-liu/RVSD}",
    "published": "2026-09-02T15:40:40Z",
    "updated": "2026-09-02T15:40:40Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.02731"
  },
  {
    "id": "2609.02639",
    "title": "TaRA: Training-Aware Low-Rank Adaptation Initialization",
    "authors": [
      "Taehyeon Kim",
      "Eunhyeok Park"
    ],
    "abstract": "Low-Rank Adaptation (LoRA) has become a de facto standard for parameter-efficient fine-tuning (PEFT), yet its performance is highly sensitive to initialization due to the information bottleneck imposed by low-rank decomposition. Existing approaches attempt to construct high-quality LoRA initializations by exploiting principal components of pretrained weights, activations, or gradients. However, these methods do not directly account for the training dynamics of the full-rank model. In this paper, we propose Training-aware Low-Rank Adaptation Initialization (TaRA), a method that initializes LoRA such that the gradients induced by the low-rank factors closely approximate the gradient of the corresponding full-rank weight matrix. Derived from a mathematical formulation, TaRA improves gradient fidelity at the start of training while introducing negligible computational overhead. Across diverse and challenging fine-tuning tasks, TaRA consistently outperforms prior state-of-the-art methods, establishing a simple, robust, and scalable solution for effective LoRA initialization.",
    "published": "2026-09-02T14:15:22Z",
    "updated": "2026-09-02T14:15:22Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2609.02639"
  },
  {
    "id": "2609.02624",
    "title": "Automated Vulnerability Injection in Smart Contracts Using Large Language Models",
    "authors": [
      "Luca Migliaccio",
      "Roberto Natella",
      "Naghmeh Ivaki",
      "Nuno Laranjeiro",
      "Marco Vieira"
    ],
    "abstract": "Assessing vulnerability detection tools for smart contracts requires datasets with known ground truth, yet such datasets are scarce and difficult to build by hand. We propose an approach that uses Large Language Models (LLMs) to automatically inject vulnerabilities into Solidity smart contracts, and demonstrate it in a case study targeting 49 vulnerability types from OpenSCV. Injected contracts are validated through a multi-step pipeline checking compilation, execution, business logic, and the presence of the intended vulnerability. Applied to real-world contracts from SmartBugs, LLMs generate nearly 1,000 candidate variants; after deduplication and validation, 32 confirmed vulnerable contracts spanning 25 vulnerability types survive (a 16.58% survival rate). Surviving contracts concentrate in structurally simpler targets and vulnerability types with localized syntactic patterns. We report practical challenges including LLMs' non-determinism and the difficulty of preserving contract semantics. We then use the validated contracts to assess three static analyzers, revealing complementary and incomplete coverage profiles. Results show that LLM-based vulnerability injection is feasible, while exposing key limitations in scalability and diversity.",
    "published": "2026-09-02T14:03:09Z",
    "updated": "2026-09-02T14:03:09Z",
    "categories": [
      "cs.SE",
      "cs.AI",
      "cs.CR"
    ],
    "url": "https://arxiv.org/abs/2609.02624"
  },
  {
    "id": "2609.02620",
    "title": "Collective creativity in hybrid societies",
    "authors": [
      "Mason Youngblood",
      "Katie Mudd",
      "Manuel Anglada-Tort",
      "Cameron Jones",
      "Elena Miu",
      "Diana Omigie",
      "Margaret Schedel"
    ],
    "abstract": "Generative AI is changing how cultural artifacts are created and circulated, and with it our understanding of creativity itself. Researchers disagree about whether these tools enrich or impoverish culture, and we argue that much of that disagreement comes from conflating two distinct components of creativity: novelty, a property of single artifacts, and diversity, a property of populations. We argue further that creativity in the context of generative AI is best understood as a property of hybrid collectives, or populations of interacting people and algorithms, rather than of individuals. AI-assisted ideation reliably raises the novelty of individual output while narrowing diversity in the aggregate, but this is not an inevitable consequence of putting machines in the loop. Because humans and models search in complementary ways, mixed groups can outperform and out-diversify groups of either kind alone, and machine-discovered solutions can enter human culture and persist there. What decides the outcome is composition: which agents are present, in what proportion, and how they are connected. The question is no longer whether AI helps or harms creativity, but which mixtures let individual gains accumulate without eroding collective diversity.",
    "published": "2026-09-02T13:59:08Z",
    "updated": "2026-09-02T13:59:08Z",
    "categories": [
      "cs.AI",
      "cs.CY",
      "cs.MA"
    ],
    "url": "https://arxiv.org/abs/2609.02620"
  },
  {
    "id": "2609.01455",
    "title": "When Safety Routing Breaks: Understanding Alignment Fragility under Benign Fine-Tuning",
    "authors": [
      "Yitong Guo",
      "Xiaoyi Chen",
      "Siyuan Zhang",
      "Xiaofeng Wang",
      "Haixu Tang"
    ],
    "abstract": "Benign fine-tuning severely weakens the safety alignment of large language models (LLMs), so we study why refusal behavior is so fragile. While prior work often attributes this failure to gradient conflict, we propose a fundamentally different Fisher-geometric explanation: safety Fisher is low-rank, and alignment makes the safety geometry flatter while preserving an output-routing pathway. After 100 benign fine-tuning examples, this pathway is selectively re-sharpened in output-side MLP modules, explaining the asymmetric fragility: safety can collapse to high attack success rates, while general utility degrades mildly. The routing view also explains why few safety examples can restore refusal behavior, indicating that internal safety-relevant representations are preserved. Finally, we show that LoRA and ASAM mitigate early collapse by suppressing output-side sharpness, but their protection weakens at larger fine-tuning scales. Overall, safety failure is best understood as a disruption of a low-rank output-routing mechanism",
    "published": "2026-09-01T15:59:32Z",
    "updated": "2026-09-01T15:59:32Z",
    "categories": [
      "cs.CR",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.01455"
  },
  {
    "id": "2609.01438",
    "title": "Cross-Modal Guidance for Out-of-View Object Search in Simulated Prosthetic Vision",
    "authors": [
      "Adyah Rastogi",
      "Apurv Varshney",
      "Tobias Höllerer",
      "Michael Beyeler"
    ],
    "abstract": "Out-of-view guidance is well established in virtual and augmented reality, but its effectiveness may depend on the visual bandwidth available to the user. We test this under simulated prosthetic vision (SPV), where visual guidance must share the same sparse representation used to inspect the scene. Nineteen participants performed object search under two SPV conditions differing in electrode density and phosphene spread (10x10 and 20x20) and four guidance conditions (no guidance, visual, haptic, audio) all driven by the same horizontal target-offset variable. All three modalities reduced search time and head movement. The tested auditory and haptic cues produced approximately 25% faster overall search and 11-13% faster target acquisition than the visual cue, despite similarly direct orienting trajectories. The tested haptic and auditory cues also shortened post-acquisition search. Final head-target angular offset was reduced substantially more in the 10x10 SPV condition; there, all three cues also reduced vertical localization error by approximately 45-58% despite providing no elevation information. Under severe visual constraints, guidance performance depended on cue implementation and search stage.",
    "published": "2026-09-01T15:45:35Z",
    "updated": "2026-09-01T15:45:35Z",
    "categories": [
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2609.01438"
  },
  {
    "id": "2609.01433",
    "title": "Gaussian Core LoRA: Distribution-Aware Dynamic Adaptation for Broad Concept Erasure",
    "authors": [
      "Qinghui Gong",
      "Xunlei Chen",
      "Yu-Xuan Zhang",
      "Hua Meng",
      "Zhengchun Zhou"
    ],
    "abstract": "Concept erasure aims to suppress unsafe, privacy-sensitive, or undesirable generations in text-to-image diffusion models while preserving benign semantics, visual quality, and deployment efficiency. Existing adapter-based methods, such as Low-Rank Adaptation (LoRA), typically freeze the diffusion backbone and learn lightweight parameter updates to steer generation away from target semantics. However, these methods usually assign a static semantic erasure direction to each target concept. This assumption is overly coarse for broad and complex target concepts, since a concept often contains multiple latent semantic prototypes involving different objects, scenes, or relations, and requires different local erasure directions. A single LoRA update averages these heterogeneous erasure demands, leading to under-erasure on difficult prototypes and over-editing of nearby benign semantics. To address this limitation, we propose Gaussian Core LoRA, a distribution-aware low-rank adaptation framework. It fits a Gaussian mixture model in the prompt feature space to estimate latent semantic prototypes within the target concept. During inference, each input prompt is projected into this feature space to compute its Gaussian posterior responsibilities, which condition the core generator to produce a prompt-specific, norm-bounded residual reconfiguration of the shared LoRA rank space. This enables prototype-adaptive erasure with a single lightweight adapter. Compared with the strongest baseline on each metric, Gaussian Core LoRA reduces average Attack Success Rate (ASR) by 7.95%, lowers COCO Fr'echet Inception Distance (FID) by 14.72%, and improves CLIP Score by 4.98%. Further experiments show robustness to adversarial prompts, scalability to multi-identity and multi-style erasure, and compatibility with SDXL and FLUX.",
    "published": "2026-09-01T15:42:11Z",
    "updated": "2026-09-01T15:42:11Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.01433"
  },
  {
    "id": "2609.01431",
    "title": "Efficiently Estimating Optimal Hyperparameter Scaling Laws through Power-Law Entropy Search",
    "authors": [
      "Zhiliang Chen",
      "Sebastian Ament",
      "David Eriksson",
      "Maximilian Balandat",
      "Eytan Bakshy",
      "Jihao Andreas Lin"
    ],
    "abstract": "Optimal hyperparameter scaling laws describe how the best hyperparameters for large language model (LLM) training change with model and data scale, enabling practitioners to predict optimal configurations at production scales without expensive large-scale tuning. However, estimating these scaling laws conventionally requires exhaustive grid searches over thousands of training runs, consuming enormous computational resources. We introduce Power-Law Entropy Search (PLES), a computational cost-aware acquisition function built on multi-fidelity Bayesian optimization that efficiently estimates optimal hyperparameter scaling laws through adaptive experimentation. A key innovation in PLES is that it searches for candidates that reduce the overall uncertainty of a scaling law estimate, instead of optimizing a single objective function. At each iteration, PLES selects the candidate configuration that maximally reduces the uncertainty of the scaling law estimates per unit computational cost, naturally favoring informative small-scale experiments. We evaluate PLES on synthetic benchmarks, surrogate models fitted to real LLM training data, and actual LLM pre-training runs. Across all settings, PLES converges to accurate optimal hyperparameter scaling laws using less than one-tenth of the computational budget required by conventional grid search and other baselines.",
    "published": "2026-09-01T15:41:59Z",
    "updated": "2026-09-01T15:41:59Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.01431"
  },
  {
    "id": "2609.01430",
    "title": "Learning Sparse Decision Trees via Transformer Variational Auto-Encoders",
    "authors": [
      "Giacomo Fidone",
      "Alessio Cascione",
      "Riccardo Guidotti"
    ],
    "abstract": "Decision trees are among the most widely used models in machine learning, largely due to their transparent decision logic, making them well-suited for high-stakes decision-making contexts. However, most existing learning algorithms focus on predictive performance, overlooking the joint optimization of other desirable properties, such as structural sparsity. In this work we propose TREVIS, an approach for learning decision trees with respect to complex objectives, based on the exploration of the latent space of a Tree Transformer Variational Auto-Encoder (TTVAE). By mapping decision trees onto latent representations, TREVIS replaces the discrete search space with a continuous one, enabling gradient-based optimization via a differentiable surrogate model. We experiment with TREVIS for learning decision trees that jointly optimize predictive performance and sparsity. Results show that TREVIS discovers decision trees matching the predictive performance of existing near-optimal algorithms while improving their structural sparsity.",
    "published": "2026-09-01T15:40:33Z",
    "updated": "2026-09-01T15:40:33Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.01430"
  },
  {
    "id": "2609.01427",
    "title": "Pix2Rep-v2: Data-Efficient Representation Learning for Dense Medical Imaging Applications",
    "authors": [
      "S. Sifaoui",
      "E. Angelini",
      "S. Toupin",
      "T. Pezel",
      "L. Le Folgoc"
    ],
    "abstract": "Dense self-supervised learning (SSL) is a powerful paradigm for learning without annotations the local descriptors required to solve dense medical imaging tasks. We present Pix2Rep-v2, a framework for SSL of pixel- and voxel-level representations suitable for few-shot downstream applications. Pix2Rep-v2 addresses the main challenges of dense SSL by leveraging a redundancy reduction objective at the pixel-level with a principle of equivariance of dense representations, that scales efficiently to 3D or wide field-of-view applications. We evaluate our method on four datasets, across multiple tasks, multiple modalities and anatomical structures using multiple backbones in 2D and 3D, and under various data regimes. As an alternative to linear probing or full fine-tuning on the downstream task, we also propose an in-context variant, without downstream training, based on a dense prototype approach. Pix2Rep-v2 shows substantially higher data-efficiency in few-shot scenarios compared to fully supervised baselines, and is competitive with the state-of-the-art e.g., +9.3 Dice points in one-shot segmentation on the M&Ms-2 dataset. Our code and pre-trained models are publicly available at https://github.com/BioMedTP/pix2rep-v2.",
    "published": "2026-09-01T15:39:42Z",
    "updated": "2026-09-01T15:39:42Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.01427"
  },
  {
    "id": "2609.01426",
    "title": "Semantic-Guided Multimodal Preprocessing for Vision Transformer-Based Clear Cell Renal Cell Carcinoma Grading",
    "authors": [
      "Fatemeh Javadian",
      "Zhu Chen",
      "Zahra Aminparast",
      "Johannes Stegmaier"
    ],
    "abstract": "Clear cell renal cell carcinoma (CCRCC) grading is essential for treatment planning, yet existing approaches either analyze patch-level images directly or focus solely on nuclei-level classification, without linking to final tumor grading. We propose a semantic-guided multimodal preprocessing method that integrates nuclei classification maps from existing pre-trained models with RGB histopathology images for Vision Transformer (ViT)-based CCRCC grading. Our approach employs classification map channel concatenation and multiplicative modulation, with optimized overlays to leverage nuclei grading information, while preserving RGB textural features. Evaluation of multiple preprocessing strategies demonstrates that semantic-guided enhancement achieves 0.916 balanced accuracy, outperforming RGB-only baseline (0.707) and max-voting aggregation from prior studies (0.427). Sensitivity analysis reveals that this 21 percentage point improvement over baseline persists even under simulated perturbation at rates matching current state-of-the-art nuclei classification model error thresholds, suggesting both effective semantic utilization and practical robustness. These findings show that preprocessing-based multimodal fusion can leverage the diagnostic potential of existing imperfect nuclei classifiers, effectively bridging previously isolated fine-grained nuclear-level analysis with coarse-grained ViT-based patch classification. Per-class recall was consistent across grades (0.93, 0.91, 0.91), indicating that gains are not concentrated in the majority class. Because the sensitivity analysis perturbs ground-truth maps rather than predictions from an actual nuclei model, this result characterizes robustness under simulated error rather than deployment with a real upstream model, which remains for future work.",
    "published": "2026-09-01T15:39:14Z",
    "updated": "2026-09-01T15:39:14Z",
    "categories": [
      "cs.CV",
      "cs.AI",
      "cs.LG",
      "eess.IV"
    ],
    "url": "https://arxiv.org/abs/2609.01426"
  },
  {
    "id": "2609.01423",
    "title": "MegaStyle++: Scaling Image Style Space through Hierarchical Style Definition",
    "authors": [
      "Junyao Gao",
      "Sibo Liu",
      "Jiaxing Li",
      "Yanan Sun",
      "Weidong Zhang",
      "Jun Zhang",
      "Cairong Zhao"
    ],
    "abstract": "Image style is a highly abstract, human-constructed concept shaped by a range of visual factors and intrinsically entangled with content, yet a unified and explicit definition of image style remains lacking. In this work, we first discuss the fundamental question of what is style and then propose a hierarchical style definition that describes image style from an overall style identity to fine-grained visual attributes, providing a more structured, transferable, and interpretable style representation. Based on this definition, we refine the style annotation pipeline of MegaStyle and construct MegaStyle++-8M, a large-scale style dataset containing 150K overall style identities, 1M fine-grained style prompts, and 8M stylized images. Extensive analyses demonstrate that our hierarchical definition substantially expands the style space in both diversity and semantic breadth, while precisely capturing intrinsic visual style of reference images. The dataset and code will be updated at https://github.com/Tencent/MegaStyle, we hope MegaStyle++ provides a scalable foundation for studying and modeling diverse image styles.",
    "published": "2026-09-01T15:37:09Z",
    "updated": "2026-09-02T03:39:41Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.01423"
  },
  {
    "id": "2609.01418",
    "title": "Provably Safe Sim-to-Real Transfer",
    "authors": [
      "Tingting Ni",
      "Maryam Kamgarpour"
    ],
    "abstract": "To mitigate the sample complexity of real-world reinforcement learning (RL), a common practice is to first train a policy in a simulator, where samples are cheap, and then deploy the learned policy in the real world with the hope that it generalizes effectively. Such direct sim-to-real transfer is not guaranteed to succeed: simulator-trained policies can be suboptimal in the real world due to sim-to-real mismatch. Correcting this mismatch requires collecting data from the real system, but in many applications, such as robotics and healthcare, this data-collection process is itself subject to safety constraints. This gives rise to the problem of safe sim-to-real transfer: how can an agent exploit an imperfect simulator while ensuring safe real-world data collection and learning a near-optimal feasible policy for the target system? We address this problem by formulating safe sim-to-real transfer within the framework of reward-free safe RL. We design a computationally efficient algorithm that exploits simulator information to provably reduce real-world interaction while ensuring safe exploration and enabling the computation of a near-optimal feasible policy for any potential reward function. Our real-world sample complexity bound characterizes the benefit of using the simulator in terms of the sim-to-real mismatch.",
    "published": "2026-09-01T15:34:57Z",
    "updated": "2026-09-01T15:34:57Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.01418"
  },
  {
    "id": "2609.01409",
    "title": "EdiTikZ: Scientific Figure Editing from Revision Trajectories",
    "authors": [
      "Christian Greisinger",
      "Zhixue Zhao",
      "Steffen Eger"
    ],
    "abstract": "Vision-language models (VLMs) have shown strong performance in generating scientific figures from text or images. However, producing publication-ready figures requires iterative refinement, making scientific figure editing an important yet largely unexplored task. Existing approaches rely on costly proprietary agentic systems, focus primarily on evaluation, or construct training supervision from synthetically generated edits. Instead, we leverage naturally occurring scientific revision and development trajectories as a scalable source of supervision. To this end, we introduce DaEdiTikZ, the first large-scale dataset of revision-derived scientific figure edits, constructed by mining 391K plausible TikZ edit pairs from arXiv, GitHub, and TeX SE and inferring 781K directed edit instructions with a VLM conditioned on rendered figures and TikZ code. We further introduce DaEdiTikZ-Bench, a human-refined benchmark with 790 instances, and train two compact Qwen3.5-based EdiTikZ models (4B and 9B) by jointly learning reconstruction and editing, followed by reinforcement learning (RL) with complementary rewards for rendered fidelity and edit application. Automatic evaluation places our 9B model above all tested baselines, while human evaluation with 9 annotators and 4,320 ratings places it above GPT-5.6-Sol and on par with Gemini-3.1-Pro. Under severe out-of-distribution shifts, it remains competitive with GPT-5.6-Sol near its 2K training sequence-length regime. Models and datasets will be released.",
    "published": "2026-09-01T15:29:52Z",
    "updated": "2026-09-01T15:29:52Z",
    "categories": [
      "cs.AI",
      "cs.CL",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.01409"
  },
  {
    "id": "2609.01408",
    "title": "Neuro-Symbolic Geometric Abstraction (NeuSOGA): From Observations to Symbolic Mathematical Representations",
    "authors": [
      "Qingde Li",
      "Qingqi Hong",
      "Zihan Li",
      "Jie Tian"
    ],
    "abstract": "A fundamental challenge in artificial intelligence is the transformation of observations into explicit symbolic representations suitable for abstraction, interpretation, and reasoning. While modern AI systems achieve remarkable perceptual capabilities through large-scale statistical learning, the resulting knowledge is typically encoded within latent parameters that are difficult to inspect or manipulate analytically. Inspired by Neuro-Symbolic AI and theories of human abstraction, this paper investigates the formation of symbolic mathematical representations from geometric observations. We propose NeuSOGA (Neuro-Symbolic Geometric Abstraction), a framework that progressively transforms observations into topological abstractions, geometric abstractions, and ultimately symbolic mathematical representations. The architecture combines topology-guided structural discovery using Euclidean Distance Transforms, foundation-model perception using Segment Anything, adaptive multi-scale geometric abstraction, and symbolic synthesis through Implicit Area Splines. The resulting representation is an analytical implicit model supporting arbitrary-order smoothness, additive composition, and closed-form evaluation. Unlike neural latent encodings, the generated representation remains interpretable, editable, and mathematically explicit. Experiments on ModelNet40 point clouds, arbitrary-view projections, and segmented optical observations demonstrate that NeuSOGA transforms diverse observations into compact symbolic representations while preserving essential geometric and topological structure across sensing modalities and viewing directions. NeuSOGA provides an interpretable and explainable pathway from observation to symbol and establishes",
    "published": "2026-09-01T15:29:30Z",
    "updated": "2026-09-02T10:10:41Z",
    "categories": [
      "cs.AI",
      "cs.CV",
      "cs.GR"
    ],
    "url": "https://arxiv.org/abs/2609.01408"
  },
  {
    "id": "2609.01404",
    "title": "Evaluating Multimodal LLMs as Generalist Vision-Language-Action Agents for Drone Control: Commanding, Approaching, Tracking and Searching",
    "authors": [
      "Jaewoo Park",
      "Minyoung Lee",
      "Sukmin Seo",
      "Moonbin Yim",
      "Hyunwook Yoon",
      "Dohoon Ryu",
      "Daehee Kim",
      "Myungseo Song",
      "Jihyuk Byun",
      "Seunggyu Chang",
      "Taeho Kil",
      "Jiseob Kim",
      "Bado Lee",
      "Geewook Kim"
    ],
    "abstract": "Multimodal Large Language Models (MLLMs) are strong perceivers of images and video. We ask how far that reach extends into acting: dropping an MLLM directly into a drone's control loop, with its entire action space declared solely in the prompt. Recent systems approach this setting but increasingly narrow the model's decision-making. We widen it back. We introduce DroneCATS-Agent, an architecture where the MLLM is a swappable component, and DroneCATS, a benchmark treating the model as the independent variable. Beyond merely flying toward a pixel, our agent entrusts the model to yaw and search, deliberate when unsure, and self-declare arrival---all without fine-tuning or function-calling schemas. Evaluating frontier and open models across four core capabilities---approaching a visible target, tracking a moving one, searching outside the initial view, and commanding a multi-drone fleet---reveals that even the simplest embodied settings are far from solved. Crucially, to identify what breaks first at the edge, our roster scales down to 2B parameters. The findings expose a stark paradox: it is not the flying that fails. Small open models often navigate into the success radius more reliably than frontier models, yet lose the episode by declaring arrival prematurely or not at all. Multi-drone commanding amplifies this divide, with small models failing by blindly copying a single coordinate across distinct views. Viewed as vision-language-action agents, the models' spatial perception holds up, but their action protocol does not. What separates a deployable edge model from a frontier model is not navigation, but the discipline to sustain a declared protocol and emit the correct terminating action. The open problem is closing this gap at onboard compute costs---yielding a fast model that plans persistently and knows exactly when it is done---and DroneCATS is built to measure that distance.",
    "published": "2026-09-01T15:27:43Z",
    "updated": "2026-09-01T15:27:43Z",
    "categories": [
      "cs.RO",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.01404"
  }
];
